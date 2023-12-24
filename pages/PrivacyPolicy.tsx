import React from "react";
import Link from "next/link";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">
        Politique de confidentialité
      </h1>

      <p>
        Dernière mise à jour : 24/12/2023
      </p>

      <p>
        Bienvenue sur Prepare ("nous", "notre", "nos"). Chez Prepare, nous
        accordons une grande importance à la protection de votre vie privée et
        de vos données personnelles. Cette politique de confidentialité vise à
        vous informer sur la manière dont nous collectons, utilisons, partageons
        et protégeons vos données.
      </p>

      <h2 className="text-lg font-semibold mt-4">Informations collectées</h2>

      <p>
        Nous collectons les informations suivantes lorsque vous utilisez notre
        application :
      </p>

      <ul className="list-disc pl-6 mt-2">
        <li>
          <strong>Informations d'inscription :</strong> Lorsque vous créez un
          compte, nous collectons votre nom, votre adresse e-mail et votre mot
          de passe.
        </li>
        <li>
          <strong>Informations sur l'établissement :</strong> Si vous
          représentez une institution éducative, nous collectons des informations
          sur l'établissement, telles que le nom de l'école, l'adresse et le
          type d'établissement.
        </li>
        <li>
          <strong>Informations sur les diplômes :</strong> Nous collectons des
          informations sur les diplômes et les formations que vous ajoutez à
          votre compte, y compris le nom du diplôme et sa description.
        </li>
        <li>
          <strong>Informations sur les services :</strong> Nous collectons des
          informations sur les services et les installations que vous sélectionnez.
        </li>
        <li>
          <strong>Informations d'utilisation :</strong> Nous collectons des
          informations sur votre utilisation de l'application, y compris les
          actions que vous effectuez et les interactions avec d'autres utilisateurs.
        </li>
      </ul>

      <h2 className="text-lg font-semibold mt-4">Utilisation des informations</h2>

      <p>
        Nous utilisons les informations que nous collectons pour les finalités
        suivantes :
      </p>

      <ul className="list-disc pl-6 mt-2">
        <li>Fournir et améliorer nos services.</li>
        <li>Personnaliser le contenu que vous voyez.</li>
        <li>
          Communiquer avec vous, notamment pour vous envoyer des mises à jour et
          des informations importantes.
        </li>
        <li>Analyser et améliorer l'expérience utilisateur.</li>
        <li>
          Protéger nos utilisateurs et notre application contre les activités
          frauduleuses et abusives.
        </li>
      </ul>

      <h2 className="text-lg font-semibold mt-4">Partage des informations</h2>

      <p>
        Nous ne partageons pas vos informations personnelles avec des tiers,
        sauf dans les cas suivants :
      </p>

      <ul className="list-disc pl-6 mt-2">
        <li>
          <strong>Avec votre consentement :</strong> Nous pouvons partager vos
          informations avec des tiers si vous y consentez explicitement.
        </li>
        <li>
          <strong>Pour se conformer à la loi :</strong> Nous pouvons divulguer
          vos informations si nous sommes tenus de le faire par la loi ou en
          réponse à une demande légitime des autorités gouvernementales.
        </li>
        <li>
          <strong>Avec des prestataires de services :</strong> Nous pouvons
          partager vos informations avec des prestataires de services tiers qui
          nous aident à fournir nos services, sous réserve de contrats de
          confidentialité appropriés.
        </li>
      </ul>

      <h2 className="text-lg font-semibold mt-4">Sécurité des données</h2>

      <p>
        Nous prenons des mesures raisonnables pour protéger vos informations
        contre la perte, l'accès non autorisé, la divulgation, l'altération ou
        la destruction. Cependant, aucune méthode de transmission sur Internet
        ou de stockage électronique n'est totalement sécurisée, et nous ne
        pouvons garantir la sécurité absolue de vos données.
      </p>

      <h2 className="text-lg font-semibold mt-4">Vos droits</h2>

      <p>
        Vous avez certains droits concernant vos informations personnelles,
        notamment le droit d'accéder, de corriger, de supprimer ou de restreindre
        l'utilisation de vos informations. Vous pouvez exercer ces droits en nous
        contactant à contact@prepare.fr.
      </p>

      <h2 className="text-lg font-semibold mt-4">Modification de la politique</h2>

      <p>
        Nous pouvons mettre à jour cette politique de confidentialité de temps à
        autre. Toute modification sera publiée sur cette page, et la date de la
        dernière mise à jour sera indiquée en haut de la politique.
      </p>

      <p className="mt-4">
        Pour toute question ou préoccupation concernant notre politique de
        confidentialité, veuillez nous{" "}
        <Link href="/contact">
          <span className="text-blue-600 hover:underline">contacter.</span>
        </Link>
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

export default PrivacyPolicy;
