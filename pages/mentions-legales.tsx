import React from "react";
import Link from "next/link";

const MentionsLegales: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">
        Mentions Légales
      </h1>
      <p>
        Le site web "Prepare" (ci-après dénommé "le Site") est édité par :
        <br />
        Nom de l'entreprise : Prepare
        <br />
        Forme juridique : SAS
        <br />
        Adresse du siège social : 23 avenue marie bonnafoux, Sanary-sur-mer, 83110
        <br />
        Numéro de téléphone : 06 69 75 87 28
        <br />
        Adresse e-mail de contact : contact@prepare.fr
        <br />
        Directeur de la publication : Matthieu Belin
        <br />
        Responsable de la rédaction : Matthieu Belin
        <br />
        Le Site est hébergé par :
        <br />
        Hébergeur : IONOS
        <br />
        Adresse : 6 rue janin, Lyon, 69004
        <br />
        Numéro de téléphone de l'hébergeur : 06 69 75 87 28
        <br />
        Le Site a été conçu et développé par :
        <br />
        Société de développement : Oxpium Agency
        <br />
        Adresse de la société de développement : 6 rue janin, Lyon, 69004
        <br />
        Numéro de téléphone de la société de développement : 06 69 75 87 28
        <br />
        Adresse e-mail de la société de développement : contact@oxpium.fr
        <br />
        Le Site est destiné à fournir des informations sur les services offerts par "Prepare" et à permettre aux utilisateurs de s'inscrire et d'accéder à ces services.
        <br />
        Toute utilisation du Site est soumise aux présentes conditions générales d'utilisation.
        <br />
        L'accès au Site et son utilisation impliquent l'acceptation totale et sans réserve des présentes mentions légales.
        <br />
        Les informations fournies sur le Site sont données à titre indicatif et sont susceptibles d'être modifiées à tout moment sans préavis.
        <br />
        Pour toute question ou réclamation concernant le Site ou son contenu, vous pouvez nous contacter à l'adresse e-mail suivante : contact@prepare.fr.
      </p>
      <div className="text-center mt-6">
            <Link href="/login">
              <button className="text-blue-600 hover:underline">
                Retourner à la page de connexion
              </button>
            </Link>
          </div>
    </div>
  );
};

export default MentionsLegales;
