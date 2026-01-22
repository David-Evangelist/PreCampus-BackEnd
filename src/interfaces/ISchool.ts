import { Role } from "../constants/roles";
import { Address } from "./Address";

export interface ISchool {
  corporateName: string; // Razão Social
  cnpj: string;
  email: string;
  password: string;
  phone: string;

  address: Address;

  classes: {
    firstYear: number; // 1º ano
    secondYear: number; // 2º ano
    thirdYear: number; // 3º ano
  };

  studentsCount: {
    firstYear: number;
    secondYear: number;
    thirdYear: number;
  };

  role: Role;

  createdAt?: Date;
  updatedAt?: Date;
}
