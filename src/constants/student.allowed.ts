import type { IStudent } from "../interfaces/IStudent";

export const STUDENT_ALLOWED_FIELDS = [
  "fullName",
  "phone",
  "birthDate",
  "address",
  "monthlyIncome",
  "guardian",
  "interestedCourses",
  "interestedUniversities",
] as const satisfies readonly (keyof IStudent)[];
