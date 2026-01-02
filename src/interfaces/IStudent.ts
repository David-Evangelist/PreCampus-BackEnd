import { IBaseUser } from "./IBaseUser";

export interface IStudent extends IBaseUser {
  fullName: string;
  birthDate: Date;
  phone?: string;

  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };

  monthlyIncome: number;

  guardian: {
    fullName: string;
    relationship: string;
    cpf: string;
    email: string;
    address: string;
  };

  interestedCourses: string[];
  interestedUniversities: string[];
}
