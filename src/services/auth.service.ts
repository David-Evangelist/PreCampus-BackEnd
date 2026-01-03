import "dotenv/config";

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { IAuthEntity } from "../interfaces/IAuthEntity";

const { JWT_SECRET_KEY } = process.env;

interface AuthenticateUserParams {
  user: IAuthEntity;
  password: string;
}

export async function authenticateUser({
  user,
  password,
}: AuthenticateUserParams): Promise<string> {
  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    throw new Error("INVALID_CREDENTIALS");
  }

  const token = jwt.sign(
    {
      userId: user._id.toString(),
      role: user.role,
    },
    JWT_SECRET_KEY!,
    { expiresIn: "7d" }
  );

  return token;
}
