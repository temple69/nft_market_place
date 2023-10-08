import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';

interface ExtendedNextApiRequest extends NextApiRequest {
    user?: any; // You can make this more specific if you know the shape of the user object
}

export const authenticateUser = async (req: ExtendedNextApiRequest, res: NextApiResponse) => {
    const authHeader = req.headers.get('authorization');

    if (!authHeader) {
        return res.status(401).json({ error: 'Authorization header is missing.' });
    }

    const token = authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ error: 'Authentication token is missing.' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
        req.user = decoded;
    } catch (error) {
        if (error instanceof Error) {
            console.error("Token verification error:", error.message);
            return res.status(401).json({ error: error.message });
        } else {
            // Handle other types of errors or re-throw them
            return res.status(500).json({ error: 'An unexpected error occurred.' });
        }
    }
};
