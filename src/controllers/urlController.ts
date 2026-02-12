import * as urlService from "../services/urlService.js";
import type {RequestHandler} from 'express';


export const createURL: RequestHandler = async (req, res) => {
    try {
        const {baseURL, userId} = req.body;
        if (!baseURL) {
            return res.status(400).json({message: "URL is required"})
        }

        const newURL = await urlService.shortenURL(baseURL, userId);
        return res.status(201).json(
            {
                shortURL: newURL.shortURL,
                baseURL: newURL.baseURL
            }
        )

    } catch (e) {
        res.status(500).json({
            message: e instanceof Error
                ? e.message
                : "Internal server error"
        })
    }
}

export const getURL: RequestHandler = async (req, res) => {
    res.json({message:'Hola'})
}