import { NextResponse } from "@/node_modules/next/server";
import { db } from "@/lib/db";
import { hash } from "bcrypt";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, username, password } = body;

    // Validate fields
    if (!email || !username || !password) {
      return NextResponse.json(
        { message: "Missing required fields." },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: "Invalid email format." },
        { status: 400 }
      );
    }

    // Validate password length
    if (password.length < 8) {
      return NextResponse.json(
        { message: "Password must be at least 8 characters long." },
        { status: 400 }
      );
    }

    const existingEmail = await db.user.findUnique({
      where: { email: email },
    });

    if (existingEmail) {
      return NextResponse.json(
        {
          user: null,
          message: "user with the same email already exists",
        },
        { status: 409 }
      );
    }

    const existingUsername = await db.user.findUnique({
      where: { username: username },
    });

    if (existingUsername) {
      return NextResponse.json(
        {
          user: null,
          message: "user with the same username already exists",
        },
        { status: 409 }
      );
    }

    const hashedpasskey = await hash(password, 10);
    const newUser = await db.user.create({
      data: {
        username,
        email,
        password: hashedpasskey,
      },
    });

    const { password: newuserPassword, ...res } = newUser;

    return NextResponse.json(
      { user: res, message: "user created successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error", details: error.message },
      { status: 500 }
    );
  }
}
