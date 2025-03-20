import fastify from "fastify"
import { webhookRoutes } from "./routes/webhookRoutes"

const server = fastify()

server.register(webhookRoutes)

server
    .listen({
        host: '0.0.0.0',
        port: process.env.PORT ? Number(process.env.PORT) : 3333
    })
    .then(() => {
        console.log('HTTP Server running!')
    })