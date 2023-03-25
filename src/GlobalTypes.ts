export interface contact {
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

export interface adress {
  region: string;
  département: string;
  Commune: string;
  Postal: string;
}

export interface exploitation {
  qualification: string;
  génération: string;
  présentation: string;
  suivi: string;
}

export interface CUMA {
  coopération: string;
  UMA: string;
}

interface contactAssociés {
  assoc: string;
  contact: string;
}

interface Gisement {
  bovin: number;
  bettrave: number;
  Autres: null | number;
  graph: {
    bioGaz: number;
    Obligations: number;
    Electrcité: number;
    Actions: number;
  };
}

export interface stateInterface {
  persons: person[];
}

export interface actionInterface {
  type: string;
  payload: { index: number; load: unknown };
}

export interface person {
  index: number;
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
  Gisement: Gisement;
}
