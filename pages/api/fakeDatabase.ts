// Définir un type pour les informations de l'établissement
type EtablissementInfo = {
  password: string;
  info?: {
    nomEcole: string;
    adresse: string;
    typeEtablissement: string;
  };
  diplomes?: string[];
  services?: string[];
};

// Définir un type pour l'objet des établissements
type Etablissements = Record<string, EtablissementInfo>;

// fakeDatabase avec le type Etablissements
const fakeDatabase: { etablissements: Etablissements } = {
  etablissements: {
    "ecole1@example.com": {
      password: "hashed_password1",
      // info, diplomes, et services seront ajoutés/mis à jour via des fonctions
    },
    "ecole2@example.com": {
      password: "hashed_password2",
      // info, diplomes, et services seront ajoutés/mis à jour via des fonctions
    },
  },
};

// Fonction pour mettre à jour les informations de l'établissement
export const updateSchoolInfo = (
  email: string,
  schoolInfo: { nomEcole: string; adresse: string; typeEtablissement: string }
) => {
  const etablissement = fakeDatabase.etablissements[email];
  if (etablissement) {
    etablissement.info = schoolInfo;
  }
};

// Fonction pour mettre à jour la liste des diplômes de l'établissement
export const updateDiplomas = (email: string, diplomas: string[]) => {
  const etablissement = fakeDatabase.etablissements[email];
  if (etablissement) {
    etablissement.diplomes = diplomas;
  }
};

// Fonction pour mettre à jour la liste des services de l'établissement
export const updateServices = (email: string, services: string[]) => {
  const etablissement = fakeDatabase.etablissements[email];
  if (etablissement) {
    etablissement.services = services;
  }
};

export default fakeDatabase;
