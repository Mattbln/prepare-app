import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Autocomplete from "react-google-autocomplete";

const SchoolInfo: React.FC = () => {
  const [schoolName, setSchoolName] = useState("");
  const [address, setAddress] = useState("");
  const [type, setType] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logique de soumission du formulaire
    // Par exemple, rediriger vers l'étape suivante :
    // router.push('/nextStep');
  };

  const handlePlaceSelect = (place: any) => {
    setAddress(place.formatted_address); // ou la propriété appropriée de l'objet 'place'
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Information de l'école</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="schoolName" className="block mb-2">
            Nom de l'école
          </label>
          <input
            type="text"
            id="schoolName"
            value={schoolName}
            onChange={(e) => setSchoolName(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="address" className="block mb-2">
            Adresse
          </label>
          <Autocomplete
            apiKey={"AIzaSyBNLonH9yX85o9j1MCiBB16d3d815MP0KY"}
            onPlaceSelected={handlePlaceSelect}
            options={{
              componentRestrictions: { country: "fr" },
            }}
            defaultValue={address}
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="type" className="block mb-2">
            Type d'établissement
          </label>
          <select
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
          >
            <option value="">Sélectionnez le type</option>
            <option value="public">Public</option>
            <option value="private">Privé</option>
          </select>
        </div>

        <div className="flex justify-end">
          <Link href={"/"}>
            <button
              type="submit"
              className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
            >
              Passer à l'étape suivante
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SchoolInfo;
