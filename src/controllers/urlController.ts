import { RequestHandler } from "express"
import { getURL, shortenURL } from "../services/urlService.js"


export const createURL: RequestHandler = async (req, res) => {
    try {
        const {baseURL} = req.body

        if (!baseURL) {
            return res.status(400).json({message: "No se ha enviado la URL"})
        }

        const urlData = await shortenURL(baseURL)

        return res.status(201).json(
            {
                message: "URL creada con exito",
                shortCode: urlData.shortCode,
                baseURL: baseURL,
                shortURL: urlData.shortURL
            })
    } catch (e) {

        res.status(500).json(
            {
                message: e instanceof Error
                    ? e.message
                    : "Error interno del servidor"
            }
        )

    }


}

export const getOriginalUrl: RequestHandler = async (req, res) => {
    try {
        const {code} = req.params //Extraer el codigo de la URL
        const originalURL = await getURL(code as string)

        if (!originalURL) {
            return res.status(404)
                .json(
                    {
                        message: "La URL no existe"
                    })
        }
        return res.status(302).redirect(originalURL)

    } catch (e) {
        res.status(500).json({
            message: e instanceof Error
                ? e.message
                : "Error al redireccionar"
        })
    }
}