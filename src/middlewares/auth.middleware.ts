import "dotenv/config";

import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { Role } from "../constants/roles";

interface JwtPayload {
  userId: string;
  role: Role;
}

declare global {
  namespace Express {
    interface Request {
      user?: JwtPayload;
    }
  }
}

const { JWT_SECRET_KEY } = process.env;

export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const token = req.cookies?.token;

  if (!token) {
    return res.status(401).json({ message: "Não autenticado" });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET_KEY!) as JwtPayload;

    req.user = decoded;

    return next();
  } catch {
    return res.status(401).json({ message: "Token inválido" });
  }
}
