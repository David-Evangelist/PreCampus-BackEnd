import { Role } from "../constants/roles";
import { Address } from "./Address";

export interface Course {
  name: string;
  description: string;
}

export interface SocialLink {
  name: string;
  url: string;
}
export interface IUniversity {
  corporateName: string; // Razão Social
  cnpj: string;
  email: string;
  password: string;
  phone: string;

  description: string;

  courses: Course[];

  website?: string;
  socialLinks?: SocialLink;

  address: Address;

  role: Role;

  createdAt?: Date;
  updatedAt?: Date;
}
