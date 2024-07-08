import fastify from "fastify";
import cors from "@fastify/cors";
import { routes } from "./routes";

export const app = fastify();
app.register(routes);
app.register(cors);

app.listen({ port: 3000 }, (error, address) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Server online...");
    }
});
