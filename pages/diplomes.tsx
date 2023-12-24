import React, { useState } from "react";
import Link from "next/link";

const DiplomaForm = () => {
  const [diplomas, setDiplomas] = useState([{ name: "", description: "" }]);

  const addDiploma = () => {
    setDiplomas([...diplomas, { name: "", description: "" }]);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center  mb-6">
        Ajouter des Diplômes et Formations
      </h1>

      <form className="space-y-4">
        {diplomas.map((diploma, index) => (
          <div
            key={index}
            className="p-4 border border-gray-200 rounded shadow-sm"
          >
            <input
              type="text"
              name="name"
              value={diploma.name}
              placeholder="Nom du diplôme"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="description"
              value={diploma.description}
              placeholder="Description"
              className="w-full mt-2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        ))}
        <button
          type="button"
          onClick={addDiploma}
          className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Ajouter un autre diplôme
        </button>
        <Link href={"/services"}>
          <div className="flex justify-center mt-8">
            <button
              type="submit"
              className="px-6 py-3 text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Passer à l&apos;étape suivante
            </button>
          </div>
        </Link>
      </form>
    </div>
  );
};

export default DiplomaForm;
