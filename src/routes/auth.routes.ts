import { Router } from "express";
import {
  loginStudent,
  loginInstitution,
  logout,
} from "../controllers/auth.controller";
import { profile } from "../controllers/profile.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = Router();

router.post("/login/student", loginStudent);
router.post("/login/institution", loginInstitution);
router.get("/profile", authMiddleware, profile);
router.post("/logout", logout);

export default router;
