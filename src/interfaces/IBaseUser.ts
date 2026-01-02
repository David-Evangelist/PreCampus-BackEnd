export interface IBaseUser {
  email: string;
  password: string;
  role: "student" | "school" | "university" | "admin";
}
