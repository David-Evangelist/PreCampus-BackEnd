import { Router } from "express";
import studentRoutes from "../domains/student/routes";
import schoolRoutes from "../domains/school/routes";
import universityRoutes from "../domains/university/routes";

import authRoutes from "./auth.routes";

const routes = Router();

routes.use("/students", studentRoutes);
routes.use("/schools", schoolRoutes);
routes.use("/universities", universityRoutes);

routes.use("/auth", authRoutes);

export default routes;
