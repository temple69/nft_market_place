import { NextResponse } from "@/node_modules/next/server";
import { db } from "@/lib/db";
import { hash, compare } from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password } = body;

    const user = await db.user.findUnique({
      where: { email: email },
    });

    if (!user) {
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 401 }
      );
    }

    const isPasswordValid = await compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 401 }
      );
    }

    // Generate JWT
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET as string
    );

    // Here, you can set the JWT in a cookie or send it back in the response.
    // For simplicity, we're sending it in the response.
    return NextResponse.json(
      { token: token, message: "Login successful" },
      { status: 200 }
    );
  } catch (error) {
    let errorMessage = "Internal Server Error";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return NextResponse.json(
      {
        message: errorMessage,
        details: error instanceof Error ? error.message : error,
      },
      { status: 500 }
    );
  }
}
