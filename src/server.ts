import express from "express";
import urlRoutes from '../src/routes/urlRoutes.js';

const PORT = 3000

const app = express();

app.use('/api',urlRoutes)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))