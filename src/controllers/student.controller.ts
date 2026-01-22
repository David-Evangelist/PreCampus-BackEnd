import { Request, Response } from "express";
import { Student } from "../domains/student/model";
import bcrypt from "bcryptjs";
import { ROLES } from "../constants/roles";


export async function registerStudent(req: Request, res: Response) {
  const {
    fullName,
    email,
    password,
    birthDate,
    phone,
    address,
    monthlyIncome,
    guardian,
    interestedCourses,
    interestedUniversities,
  } = req.body;

  // 1Validação básica
  if (!fullName || !email || !password) {
    return res.status(400).json({
      message: "Nome completo, email e senha são obrigatórios",
    });
  }

  // Verificar duplicidade
  const studentExists = await Student.findOne({ email });

  if (studentExists) {
    return res.status(409).json({
      message: "Já existe um aluno cadastrado com este email",
    });
  }

  // Hash da senha
  const hashedPassword = await bcrypt.hash(password, 10);

  // Criação do aluno
  const student = await Student.create({
    fullName,
    email,
    password: hashedPassword,
    birthDate,
    phone,
    address,
    monthlyIncome,
    guardian,
    interestedCourses,
    interestedUniversities,
    role: ROLES.STUDENT,
  });

  // Retorno seguro
  return res.status(201).json({
    id: student._id,
    fullName: student.fullName,
    email: student.email,
    role: student.role,
    createdAt: student.createdAt,
  });
}
