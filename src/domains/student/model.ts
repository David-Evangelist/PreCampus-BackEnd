import { Schema, model } from "mongoose";
import { IStudent } from "../../interfaces/IStudent";

const StudentSchema = new Schema<IStudent>(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },

    birthDate: Date,
    phone: String,

    address: {
      street: String,
      number: String,
      city: String,
      state: String,
      cep: String,
    },

    monthlyIncome: Number,

    guardian: {
      fullName: String,
      relationship: String,
      otherRelationship: String,
      cpf: String,
      email: String,
      address: {
        street: String,
        number: String,
        city: String,
        state: String,
        cep: String,
      },
    },

    interestedCourses: {
      type: [String],
      validate: [(v: string[]) => v.length <= 3, "Máx 3 cursos"],
    },

    interestedUniversities: {
      type: [String],
      validate: [(v: string[]) => v.length <= 3, "Máx 3 universidades"],
    },

    role: {
      type: String,
      default: "student",
    },
  },
  { timestamps: true }
);

export const Student = model<IStudent>("Student", StudentSchema);
