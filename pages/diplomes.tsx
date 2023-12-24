import React, { useState, ChangeEvent, FormEvent } from "react";
import Link from "next/link";

type SelectedDiplomasType = Record<string, boolean>;

const DiplomaForm = () => {
  const diplomaOptions = [
    "Licence en 3 ans (bac+3)",
    "Master en 2 ans (bac +5)",
    "Doctorat en 3 ans (bac+8)",
    "DAEU en 1 à 4 ans (niveau 4, équivalent du bac)",
    "Licence professionnelle en 1 à 3 ans (bac+3)",
    "BUT en 3 ans (bac+3)",
    "DEUST en 2 ans (bac+2)",
  ];
  const [selectedDiplomas, setSelectedDiplomas] =
    useState<SelectedDiplomasType>({});
  const [otherDiploma, setOtherDiploma] = useState("");

  const handleDiplomaChange = (
    diploma: string,
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSelectedDiplomas((prev) => ({
      ...prev,
      [diploma]: !prev[diploma],
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const selectedDiplomasList = Object.entries(selectedDiplomas)
      .filter(([diploma, isSelected]) => isSelected)
      .map(([diploma]) => diploma);
    console.log(
      "Selected Diplomas:",
      selectedDiplomasList,
      "Other:",
      otherDiploma
    );
    // Logique de traitement des données
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">
        Sélection des diplômes proposés
      </h1>
      <form onSubmit={handleSubmit}>
        {diplomaOptions.map((diploma, index) => (
          <div key={diploma} className="flex items-center mb-2">
            <input
              type="checkbox"
              id={`diploma-${index}`}
              checked={selectedDiplomas[diploma] || false}
              onChange={(e) => handleDiplomaChange(diploma, e)} // Passer les deux arguments ici
              className="mr-2"
            />
            <label htmlFor={`diploma-${index}`}>{diploma}</label>
          </div>
        ))}
        <div className="mt-4">
          <label htmlFor="otherDiploma" className="block mb-2">
            Autre diplôme :
          </label>
          <input
            type="text"
            id="otherDiploma"
            value={otherDiploma}
            onChange={(e) => setOtherDiploma(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Saisissez un autre diplôme"
          />
        </div>
        <Link href="/services">
          <button
            type="submit"
            className="px-4 py-2 mt-4 text-white bg-blue-600 rounded hover:bg-blue-700"
          >
            Soumettre
          </button>
        </Link>
        <div className="text-center mt-6">
          <Link href="/schoolInfo">
            <button className="text-blue-600 hover:underline">Retour</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default DiplomaForm;
