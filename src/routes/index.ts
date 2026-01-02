import { Router } from "express";
import studentRoutes from "../domains/student/routes";

const routes = Router();

routes.use("/students", studentRoutes);

export default routes;
