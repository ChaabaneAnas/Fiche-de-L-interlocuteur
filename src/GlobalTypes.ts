interface contact {
  email: string;
  bureau: string;
  mobile: string;
}
interface status {
  RO: string;
  OC: string;
  ST: string;
  R: number;
}

interface adress {
  region: string;
  département: string;
  Commune: string;
  Postal: string;
}

interface exploitation {
  qualification: string;
  génération: string;
  présentation: string;
  suivi: string;
}

interface CUMA {
  coopération: string;
  UMA: string;
}

interface contactAssociés {
  assoc: string;
  contact: string;
}

export interface person {
  Nom: string;
  Prenom: string;
  Qualité: string;
  référence: string;
  id: number;
  contact: contact;
  status: status;
  adress: adress;
  exploitation: exploitation;
  CUMA: CUMA;
  contactAssociés: contactAssociés;
}
