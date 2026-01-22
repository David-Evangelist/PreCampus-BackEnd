import { Schema, model } from "mongoose";
import { IUniversity } from "../../interfaces/IUniversity";
import { ROLES } from "../../constants/roles";

const UniversitySchema = new Schema<IUniversity>(
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
    description: {
      type: String,
      required: true,
    },
    courses: [
      {
        name: { type: String, required: true },
        description: { type: String, required: true },
      },
    ],
    website: {
      type: String,
    },
    socialLinks: [
      {
        name: { type: String },
        url: { type: String },
      },
    ],
    address: {
      street: { type: String, required: true },
      number: { type: String, required: true },
      city: { type: String, required: true },
      state: { type: String, required: true },
      cep: { type: String, required: true },
    },
    role: {
      type: String,
      enum: Object.values(ROLES),
      default: ROLES.UNIVERSITY,
    },
  },
  {
    timestamps: true,
  },
);

export const University = model<IUniversity>("University", UniversitySchema);
