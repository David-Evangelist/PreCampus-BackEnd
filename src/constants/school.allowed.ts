import type { ISchool } from "../interfaces/ISchool";

export const SCHOOL_ALLOWED_FIELDS = [
  "corporateName",
  "phone",
  "address",
  "classes",
  "studentsCount",
] as const satisfies readonly (keyof ISchool)[];
