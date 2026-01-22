import type { IUniversity } from "../interfaces/IUniversity";

export const UNIVERSITY_ALLOWED_FIELDS = [
  "corporateName",
  "phone",
  "description",
  "courses",
  "website",
  "socialLinks",
  "address",
] as const satisfies readonly (keyof IUniversity)[];
