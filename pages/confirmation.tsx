import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Confirmation: React.FC = () => {
  const router = useRouter();

  const handleEditClick = () => {
    // Rediriger vers la page d'édition des informations
    router.push("/editSchoolInfo");
  };

  return (
    <div className="container mx-auto p-4 text-center  ">
      <h2 className="text-2xl font-bold mb-4">Inscription Confirmée</h2>
      <p>Votre établissement a été inscrit avec succès sur Prepare.</p>
      <button
        onClick={handleEditClick}
        className="mt-4 px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
      >
        Modifier les Informations
      </button>
      <div className="text-center mt-6">
        <Link href="/services">
          <button className="text-blue-600 hover:underline">Retour</button>
        </Link>
      </div>
    </div>
  );
};

export default Confirmation;
