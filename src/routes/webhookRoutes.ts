import { FastifyInstance, FastifyRequest } from "fastify"

interface IQuery {
    code?: string,
    state?: string
}

export function webhookRoutes(server: FastifyInstance) {
    server.get(
        '/',
        async (request: FastifyRequest<{ Querystring: IQuery }>, reply) => {
            const { query, body } = request;

            const { code, state } = query

            if (code && state) {
                const dataUser = JSON.stringify({
                    code,
                    state
                })

                console.log(dataUser);

                return reply.redirect('https://w.app/zp025n')
            }

            return reply.send(body)
        })
}