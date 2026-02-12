import "dotenv/config";
import {PrismaClient} from "@prisma/client";
import {PrismaMariaDb} from '@prisma/adapter-mariadb'

console.log("🔍 DATABASE_URL detectada:", process.env.DATABASE_URL ? "SÍ" : "NO (Está vacía)");

const adapter = new PrismaMariaDb(
    {
        host: 'localhost',
        port: 3306,
        connectionLimit:5
    },
    {database: 'url-shortener'}
)

const prisma = new PrismaClient({adapter});

export default prisma;