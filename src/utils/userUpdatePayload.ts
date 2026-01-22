import { ROLES, type Role } from "../constants/roles";
import type { IStudent } from "../interfaces/IStudent";
import type { ISchool } from "../interfaces/ISchool";
import { IUniversity } from "./../interfaces/IUniversity";

export function getUpdatePayloadByRole(role: Role, body: any) {
  switch (role) {
    case ROLES.STUDENT:
      return getStudentUpdatePayload(body);

    case ROLES.SCHOOL:
      return getSchoolUpdatePayload(body);

    case ROLES.UNIVERSITY:
      return getUniversityUpdatePayload(body);

    default:
      throw new Error("Role inválido");
  }
}

function getStudentUpdatePayload(body: any): Partial<IStudent> {
  return {
    fullName: body.fullName,
    email: body.email,
    phone: body.phone,
    birthDate: body.birthDate,
    monthlyIncome: body.monthlyIncome,

    address: body.address && {
      street: body.address.street,
      number: body.address.number,
      city: body.address.city,
      state: body.address.state,
      cep: body.address.cep,
    },

    guardian: body.guardian && {
      fullName: body.guardian.fullName,
      relationship: body.guardian.relationship,
      otherRelationship: body.guardian.otherRelationship,
      cpf: body.guardian.cpf,
      email: body.guardian.email,

      address: body.guardian.address && {
        street: body.guardian.address.street,
        number: body.guardian.address.number,
        city: body.guardian.address.city,
        state: body.guardian.address.state,
        cep: body.guardian.address.cep,
      },
    },

    interestedCourses: body.interestedCourses,
    interestedUniversities: body.interestedUniversities,
  };
}

function getSchoolUpdatePayload(body: any): Partial<ISchool> {
  return {
    corporateName: body.corporateName,
    email: body.email,
    phone: body.phone,

    address: body.address && {
      street: body.address.street,
      number: body.address.number,
      city: body.address.city,
      state: body.address.state,
      cep: body.address.cep,
    },

    classes: body.classes && {
      firstYear: body.classes.firstYear,
      secondYear: body.classes.secondYear,
      thirdYear: body.classes.thirdYear,
    },

    studentsCount: body.studentsCount && {
      firstYear: body.studentsCount.firstYear,
      secondYear: body.studentsCount.secondYear,
      thirdYear: body.studentsCount.thirdYear,
    },
  };
}

function getUniversityUpdatePayload(body: any): Partial<IUniversity> {
  return {
    corporateName: body.corporateName,
    email: body.email,
    phone: body.phone,
    description: body.description,
    website: body.website,

    courses: body.courses?.map((course: any) => ({
      name: course.name,
      description: course.description,
    })),

    socialLinks: body.socialLinks?.map((link: any) => ({
      name: link.name,
      url: link.url,
    })),

    address: body.address && {
      street: body.address.street,
      city: body.address.city,
      state: body.address.state,
      cep: body.address.cep,
    },
  };
}
