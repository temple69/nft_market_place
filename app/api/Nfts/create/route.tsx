import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from "@/node_modules/next/server";
import { db } from "@/lib/db";
import { authenticateUser } from "@/middleware/auth";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

interface ExtendedNextApiRequest extends NextApiRequest {
    user?: {
        userId: number;
        email: string;
    };
}

export async function POST(req: ExtendedNextApiRequest, res: NextApiResponse) {
    try {
        // Authenticate the user
        await authenticateUser(req, res);

        // If no user is attached to the request, it means authentication failed
        if (!req.user || !req.user.userId) {
            return NextResponse.json({ message: "Authentication failed." }, { status: 401 });
        }

        const { name, image, description, blockchain } = req.body;

        if (!name || !image || !description || !blockchain) {
            return NextResponse.json({ message: "Missing required fields." }, { status: 400 });
        }

        // Create the NFT post
        const nftpost = await db.nftpost.create({
            data: {
                name,
                image,
                description,
                blockchain,
                userId: req.user.userId
            }
        });

        return NextResponse.json(nftpost, { status: 201 });

    } catch (error) {
        let errorMessage = "Internal Server Error";
        if (error instanceof Error) {
            errorMessage = error.message;
        }
        return NextResponse.json({
            message: errorMessage,
            details: error instanceof Error ? error.message : error,
        }, { status: 500 });
    }
}
