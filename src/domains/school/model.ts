import { Schema, model } from "mongoose";
import { ISchool } from "../../interfaces/ISchool";
import { ROLES } from "../../constants/roles";

const SchoolSchema = new Schema<ISchool>(
  {
    corporateName: {
      type: String,
      required: true,
    },
    cnpj: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      street: { type: String, required: true },
      city: { type: String, required: true },
      state: { type: String, required: true },
      cep: { type: String, required: true },
    },
    classes: {
      firstYear: { type: Number, required: true },
      secondYear: { type: Number, required: true },
      thirdYear: { type: Number, required: true },
    },
    studentsCount: {
      firstYear: { type: Number, required: true },
      secondYear: { type: Number, required: true },
      thirdYear: { type: Number, required: true },
    },
    role: {
      type: String,
      enum: Object.values(ROLES),
      default: ROLES.SCHOOL,
    },
  },
  {
    timestamps: true,
  }
);

export const School = model<ISchool>("School", SchoolSchema);
