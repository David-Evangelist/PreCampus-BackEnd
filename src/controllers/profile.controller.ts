import { Request, Response } from "express";
import { Student } from "../domains/student/model";
import { School } from "../domains/school/model";
import { University } from "../domains/university/model";
import { ROLES } from "../constants/roles";

export async function profile(req: Request, res: Response) {
  const { userId, role } = req.user!;

  let user = null;

  switch (role) {
    case ROLES.STUDENT:
      user = await Student.findById(userId).select("-password");
      break;

    case ROLES.SCHOOL:
      user = await School.findById(userId).select("-password");
      break;

    case ROLES.UNIVERSITY:
      user = await University.findById(userId).select("-password");
      break;

    default:
      return res.status(400).json({ message: "Role inválida" });
  }

  if (!user) {
    return res.status(404).json({ message: "Usuário não encontrado" });
  }

  return res.json(user);
}
