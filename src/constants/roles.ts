export const ROLES = {
  STUDENT: "student",
  SCHOOL: "school",
  UNIVERSITY: "university",
  ADMIN: "admin",
} as const;

export type Role = (typeof ROLES)[keyof typeof ROLES];
