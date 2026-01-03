import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import { University } from "../domains/university/model";
import { ROLES } from "../constants/roles";

export async function registerUniversity(req: Request, res: Response) {
  const {
    corporateName,
    cnpj,
    email,
    password,
    phone,
    description,
    courses,
    website,
    socialLinks,
    address,
  } = req.body;

  if (
    !corporateName ||
    !cnpj ||
    !email ||
    !password ||
    !phone ||
    !description ||
    !courses ||
    !address
  ) {
    return res.status(400).json({ message: "Dados obrigatórios ausentes" });
  }

  const universityExists = await University.findOne({
    $or: [{ cnpj }, { email }],
  });

  if (universityExists) {
    return res.status(409).json({ message: "Universidade já cadastrada" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const university = await University.create({
    corporateName,
    cnpj,
    email,
    password: hashedPassword,
    phone,
    description,
    courses,
    website,
    socialLinks,
    address,
    role: ROLES.UNIVERSITY,
  });

  return res.status(201).json({
    id: university._id,
    corporateName: university.corporateName,
    email: university.email,
    role: university.role,
  });
}
