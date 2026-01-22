import "dotenv/config";

import { Request, Response } from "express";

import { Student } from "../domains/student/model";
import { School } from "../domains/school/model";
import { University } from "../domains/university/model";
import { authenticateUser } from "../services/auth.service";

// LOGIN PARA ALUNOS
export async function loginStudent(req: Request, res: Response) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email e senha obrigatórios" });
  }

  const student = await Student.findOne({ email });

  if (!student) {
    return res.status(401).json({ message: "Credenciais inválidas" });
  }

  try {
    const token = await authenticateUser({ user: student, password });

    // res.cookie("token", token, {
    //   httpOnly: true,
    //   sameSite: "lax",
    //   secure: false,
    // });
    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "none",
      secure: true,
    });

    // return res.json({ message: "Login realizado com sucesso" });
    return res.json({
      id: student._id,
      email: student.email,
      role: student.role,
    });
  } catch {
    return res.status(401).json({ message: "Credenciais inválidas" });
  }
}

// LOGIN PARA INSTITUIÇÕES
export async function loginInstitution(req: Request, res: Response) {
  const { cnpj, password } = req.body;

  if (!cnpj || !password) {
    return res.status(400).json({ message: "CNPJ e senha obrigatórios" });
  }

  let institution =
    (await School.findOne({ cnpj })) || (await University.findOne({ cnpj }));

  if (!institution) {
    return res.status(401).json({ message: "Credenciais inválidas" });
  }

  try {
    const token = await authenticateUser({
      user: institution,
      password,
    });

    // res.cookie("token", token, {
    //   httpOnly: true,
    //   sameSite: "lax",
    //   secure: false,
    // });
    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "none",
      secure: true,
    });

    return res.json({ message: "Login realizado com sucesso" });
  } catch {
    return res.status(401).json({ message: "Credenciais inválidas" });
  }
}

// ------------------------------
// LOGOUT
export function logout(req: Request, res: Response) {
  // res.clearCookie("token", {
  //   httpOnly: true,
  //   sameSite: "lax",
  //   secure: false,
  // });
  res.clearCookie("token", {
    httpOnly: true,
    sameSite: "none",
    secure: true,
  });

  return res.status(200).json({ message: "Logout realizado com sucesso" });
}
