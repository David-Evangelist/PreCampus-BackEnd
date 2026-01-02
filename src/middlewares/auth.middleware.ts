import "dotenv/config";

import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

const { JWT_SECRET_KEY } = process.env;

export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "Não autenticado" });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET_KEY!);
    req.user = decoded as any;
    next();
  } catch {
    return res.status(401).json({ message: "Token inválido" });
  }
}
