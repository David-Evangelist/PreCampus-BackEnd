import { Address } from "./Address";

export type GuardianRelationship = "Pai" | "Mãe" | "Outro";

export interface Guardian {
  fullName: string;
  relationship: GuardianRelationship;
  otherRelationship?: string;
  cpf: string;
  email: string;
  useSameAddress: boolean;
  address?: Address;
}
