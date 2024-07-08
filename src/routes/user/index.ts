import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";

const create = async (app: FastifyInstance) => {
    app.post("/create", (request: FastifyRequest, reply: FastifyReply) => {
        return reply.status(200).send("Na rota de criacao");
    });
};

const read = async (app: FastifyInstance) => {
    app.get("/read", (request: FastifyRequest, reply: FastifyReply) => {
        return reply.status(200).send("Na rota de leitura");
    });
};

const update = async (app: FastifyInstance) => {
    app.put("/update", (request: FastifyRequest, reply: FastifyReply) => {
        return reply.status(200).send("Na rota de update");
    });
};

const remove = async (app: FastifyInstance) => {
    app.delete("/remove", (request: FastifyRequest, reply: FastifyReply) => {
        return reply.status(200).send("Na rota de delete");
    });
};

export { create, read, update, remove };
