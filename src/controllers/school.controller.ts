import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import { School } from "../domains/school/model";
import { ROLES } from "../constants/roles";

export async function registerSchool(req: Request, res: Response) {
  const {
    corporateName,
    cnpj,
    email,
    password,
    phone,
    address,
    classes,
    studentsCount,
  } = req.body;

  if (
    !corporateName ||
    !cnpj ||
    !email ||
    !password ||
    !phone ||
    !address ||
    !classes ||
    !studentsCount
  ) {
    return res.status(400).json({ message: "Dados obrigatórios ausentes" });
  }

  const schoolExists = await School.findOne({
    $or: [{ cnpj }, { email }],
  });

  if (schoolExists) {
    return res.status(409).json({ message: "Escola já cadastrada" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const school = await School.create({
    corporateName,
    cnpj,
    email,
    password: hashedPassword,
    phone,
    address,
    classes,
    studentsCount,
    role: ROLES.SCHOOL,
  });

  return res.status(201).json({
    id: school._id,
    corporateName: school.corporateName,
    email: school.email,
    role: school.role,
  });
}
