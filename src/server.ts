/* =================================== */

import express from "express";
import urlRoutes from "./routes/urlRoutes.js";
import cors from 'cors'

/* =================================== */
const PORT = 3000

const app = express();

//Middleware
app.use(express.json())
app.use(cors())

//Frontend
app.use(express.static('public'))
app.use('/api', urlRoutes)

app.listen(PORT, async () => {
    console.log(`Server running on port ${PORT}`)

})