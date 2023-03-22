interface contact {
  email: string;
  bureau: number;
  mobile: number;
}
interface status {
  RO: string;
  OC: string;
  ST: string;
  R: number;
}

export interface person {
  Nom: string;
  Prenom: string;
  Qualité: string;
  référence: string;
  id: number;
  contact: contact;
  status: status;
}
