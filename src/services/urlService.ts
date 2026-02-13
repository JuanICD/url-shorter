import redis from "../lib/redis.js";
import { randomUUID } from "node:crypto";

export const shortenURL = async (baseURL: string) => {
    //Genera un codigo random y solo se queda con la primera parte para la url
    const shortCode = randomUUID().split('-')[0]

    await redis.set(shortCode, baseURL,{
        EX:604800 // 1 semana de duracion
    })



    return {
        shortCode,
        shortURL: `http://localhost:3000/api/${shortCode}`,
        baseURL
    }
}

export const getURL = async (shortURL: string) => {
    return await redis.get(shortURL)
}
