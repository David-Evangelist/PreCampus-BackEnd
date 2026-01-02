import { Request, Response } from "express";
import { Student } from "../domains/student/model";
import bcrypt from "bcryptjs";

export async function registerStudent(req: Request, res: Response) {
  const data = req.body;

  const hashedPassword = await bcrypt.hash(data.password, 10);

  const student = await Student.create({
    ...data,
    password: hashedPassword,
  });

  return res.status(201).json(student);
}
