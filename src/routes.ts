import { UserRoutes } from "./routes/user/@userRoutes";
import { app } from "./server";

export const routes = async () => {
    app.register(UserRoutes);
};
