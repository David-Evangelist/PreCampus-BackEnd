import { Types } from "mongoose";
import { Role } from "../constants/roles";
import { Guardian } from "./Guardian";
import { Address } from "./Address";

export interface IStudent {
  _id?: Types.ObjectId;

  fullName: string;
  email: string;
  password: string;

  birthDate: Date;
  phone: string;

  address: Address;

  monthlyIncome: number;

  guardian: Guardian;

  interestedCourses?: string[];
  interestedUniversities?: string[];

  role: Role;

  createdAt?: Date;
  updatedAt?: Date;
}
