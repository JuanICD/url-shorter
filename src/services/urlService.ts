import {randomUUID} from "node:crypto";
import prisma from "../lib/prisma.js";

export const shortenURL = async (baseURL: string, userId: number) => {
    const shortCode = randomUUID()

    return await prisma.link.create({
        data: {
            baseURL,
            shortURL: shortCode,
            userId
        }
    })
}
