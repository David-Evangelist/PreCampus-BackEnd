import { Request, Response } from "express";
import { Student } from "../domains/student/model";
import { School } from "../domains/school/model";
import { University } from "../domains/university/model";

import type { IStudent } from "../interfaces/IStudent";
import type { ISchool } from "../interfaces/ISchool";
import type { IUniversity } from "../interfaces/IUniversity";

import { STUDENT_ALLOWED_FIELDS } from "../constants/student.allowed";
import { SCHOOL_ALLOWED_FIELDS } from "../constants/school.allowed";
import { UNIVERSITY_ALLOWED_FIELDS } from "../constants/university.allowed";
import { ROLES } from "../constants/roles";

import { pickAllowedFields } from "../utils/pickAllowedFields";

import { getUpdatePayloadByRole } from "../utils/userUpdatePayload";

export async function updateMe(req: Request, res: Response) {
  try {
    const { userId, role } = req.user!;

    let updatedUser = null;

    switch (role) {
      case ROLES.STUDENT: {
        const payload = getUpdatePayloadByRole(role, req.body);
        const safePayload = pickAllowedFields<IStudent>(
          payload,
          STUDENT_ALLOWED_FIELDS,
        );

        updatedUser = await Student.findByIdAndUpdate(userId, safePayload, {
          new: true,
        });
        break;
      }

      case ROLES.SCHOOL: {
        const payload = getUpdatePayloadByRole(role, req.body);
        const safePayload = pickAllowedFields<ISchool>(
          payload,
          SCHOOL_ALLOWED_FIELDS,
        );

        updatedUser = await School.findByIdAndUpdate(userId, safePayload, {
          new: true,
        });
        break;
      }

      case ROLES.UNIVERSITY: {
        const payload = getUpdatePayloadByRole(role, req.body);
        const safePayload = pickAllowedFields<IUniversity>(
          payload,
          UNIVERSITY_ALLOWED_FIELDS,
        );

        updatedUser = await University.findByIdAndUpdate(userId, safePayload, {
          new: true,
        });
        break;
      }

      default:
        return res.status(400).json({ message: "Role inválido" });
    }

    if (!updatedUser) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }

    return res.json(updatedUser);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Erro ao atualizar perfil",
      error: error instanceof Error ? error.message : error,
    });
  }
}
