import { UserRoutes } from "./routes/user/@UserRoutes";
import { app } from "./server";

export const routes = async () => {
    app.register(UserRoutes);
};
