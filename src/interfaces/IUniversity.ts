import { Role } from "../constants/roles";

export interface IUniversity {
  corporateName: string; // Razão Social
  cnpj: string;
  email: string;
  password: string;
  phone: string;

  description: string;

  courses: {
    name: string;
    description: string;
  }[];

  website?: string;
  socialLinks?: {
    instagram?: string;
    linkedin?: string;
    facebook?: string;
  };

  address: {
    street: string;
    city: string;
    state: string;
    cep: string;
  };

  role: Role;

  createdAt?: Date;
  updatedAt?: Date;
}
