import { Role } from "../constants/roles";
import { Types } from "mongoose";

export interface IAuthEntity {
  _id: Types.ObjectId;
  password: string;
  role: Role;
}
