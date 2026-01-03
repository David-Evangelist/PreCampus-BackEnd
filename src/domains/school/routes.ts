import { Router } from "express";
import { registerSchool } from "../../controllers/school.controller";

const router = Router();

router.post("/register", registerSchool);

export default router;
