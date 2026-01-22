import { Router } from "express";
import { updateMe } from "../controllers/user.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = Router();

router.patch("/me", authMiddleware, updateMe);

export default router;
