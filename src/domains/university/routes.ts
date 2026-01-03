import { Router } from "express";
import { registerUniversity } from "../../controllers/university.controller";

const router = Router();

router.post("/register", registerUniversity);

export default router;
