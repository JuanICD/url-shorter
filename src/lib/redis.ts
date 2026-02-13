import { createClient } from 'redis'
import 'dotenv/config'

//Definir el cliente
const client = createClient({
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    socket: {
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT)
    }
})

client.on('error', err => console.log('Redis Client Error', err))

await client.connect()

export default client
