import { app } from "../../server";
import { create, read, remove, update } from "./index";

export const UserRoutes = async () => {
    app.register(create);
    app.register(read);
    app.register(remove);
    app.register(update);
};
