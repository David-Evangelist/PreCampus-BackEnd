import { Types } from "mongoose";
import { Role } from "../constants/roles";

export interface IStudent {
  _id?: Types.ObjectId;

  fullName: string;
  email: string;
  password: string;

  birthDate?: Date;
  phone?: string;

  address?: {
    street?: string;
    city?: string;
    state?: string;
    cep?: string;
  };

  monthlyIncome?: number;

  guardian?: {
    fullName?: string;
    relationship?: string;
    cpf?: string;
    email?: string;
    address?: string;
  };

  interestedCourses?: string[];
  interestedUniversities?: string[];

  role: Role;

  createdAt?: Date;
  updatedAt?: Date;
}
