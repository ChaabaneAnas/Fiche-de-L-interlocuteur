import {
  stateInterface,
  actionInterface,
  exploitation,
  adress,
  CUMA,
  contact,
} from '../GlobalTypes';

export const initialState: stateInterface = {
  persons: [
    {
      index: 1,
      Nom: 'Anas',
      Prenom: 'Chaabane',
      Qualité: 'Prospect',
      référence: '22-87-OL-1',
      id: 0o610203040,
      status: {
        RO: 'id envoyé',
        OC: 'Actif',
        ST: 'Devis',
        R: 0,
      },
      contact: {
        email: 'email@exemple.com',
        bureau: '06-00-00-00-00',
        mobile: '07-00-00-00-00',
      },
      adress: {
        region: 'Nouvelle Aquitaine',
        département: ' Haute Vienne (87)',
        Commune: 'Limou',
        Postal: '1100 Impasse du Champ 87000 Limou',
      },
      exploitation: {
        génération: 'Société',
        présentation: 'Raison sociale',
        suivi: '1100 impasse du Champ 87000 Limou',
        qualification: 'SIRET',
      },
      CUMA: {
        coopération: 'DE LA BUISONNIERE',
        UMA: 'DE LA VERRIERE',
      },
      contactAssociés: {
        assoc: 'Xavier DUPONT',
        contact: '22-87-OL-15',
      },
      Gisement: {
        bovin: 300,
        bettrave: 100,
        Autres: null,
        graph: {
          bioGaz: 60,
          Obligations: 30,
          Electrcité: 40,
          Actions: 70,
        },
      },
    },
    {
      index: 2,

      Nom: 'Anas',
      Prenom: 'Chaabane',
      Qualité: 'Prospect',
      référence: '22-87-OL-1',
      id: 0o610203040,
      status: {
        RO: 'id envoyé',
        OC: 'Actif',
        ST: 'Devis',
        R: 0,
      },
      contact: {
        email: 'email@exemple.com',
        bureau: '06-00-00-00-00',
        mobile: '07-00-00-00-00',
      },
      adress: {
        region: 'Nouvelle Aquitaine',
        département: ' Haute Vienne (87)',
        Commune: 'Limou',
        Postal: '1100 Impasse du Champ 87000 Limou',
      },
      exploitation: {
        génération: 'Société',
        présentation: 'Raison sociale',
        suivi: '1100 impasse du Champ 87000 Limou',
        qualification: 'SIRET',
      },
      CUMA: {
        coopération: 'DE LA BUISONNIERE',
        UMA: 'DE LA VERRIERE',
      },
      contactAssociés: {
        assoc: 'Xavier DUPONT',
        contact: '22-87-OL-15',
      },
      Gisement: {
        bovin: 300,
        bettrave: 100,
        Autres: null,
        graph: {
          bioGaz: 60,
          Obligations: 30,
          Electrcité: 40,
          Actions: 70,
        },
      },
    },
  ],
};

export function reduerFn(
  state: stateInterface,
  action: actionInterface
): stateInterface {
  const { type, payload } = action;
  switch (type) {
    case 'Adress':
      return {
        ...state,
        persons: [
          {
            ...state.persons.slice(0, payload.index),
            ...state.persons[payload.index],
            adress: payload.load as adress,
            ...state.persons.slice(payload.index + 1),
          },
        ],
      };
    case 'Exploitation':
      return {
        ...state,
        persons: [
          {
            ...state.persons.slice(0, payload.index),
            ...state.persons[payload.index],
            exploitation: payload.load as exploitation,
            ...state.persons.slice(payload.index + 1),
          },
        ],
      };
    case 'CUMA':
      return {
        ...state,
        persons: [
          {
            ...state.persons.slice(0, payload.index),
            ...state.persons[payload.index],
            CUMA: payload.load as CUMA,
            ...state.persons.slice(payload.index + 1),
          },
        ],
      };
    case 'Contact':
      return {
        ...state,
        persons: [
          {
            ...state.persons.slice(0, payload.index),
            ...state.persons[payload.index],
            contact: payload.load as contact,
            ...state.persons.slice(payload.index + 1),
          },
        ],
      };
    default:
      return state;
  }
}
