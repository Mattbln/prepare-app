import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Autocomplete from "react-google-autocomplete";
import { updateSchoolInfo } from "./api/fakeDatabase";

const SchoolInfo: React.FC = () => {
  const [schoolName, setSchoolName] = useState("");
  const [address, setAddress] = useState("");
  const [type, setType] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const userEmail = "ecole1@example.com"; // Remplacez par l'email de l'établissement connecté
    updateSchoolInfo(userEmail, {
      nomEcole: schoolName,
      adresse: address,
      typeEtablissement: type,
    });

    router.push("/diplomes");
  };

  const handlePlaceSelect = (place: any) => {
    setAddress(place.formatted_address); // ou la propriété appropriée de l'objet 'place'

    const latitude = place.geometry.location.lat();
    const longitude = place.geometry.location.lng();

    // Vous pouvez maintenant utiliser ces valeurs de latitude et longitude
    console.log("Latitude:", latitude, "Longitude:", longitude);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Informations de l&apos;école</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="schoolName" className="block mb-2">
            Nom de l&apos;école
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
              types: ["address"],
            }}
            defaultValue={address}
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="type" className="block mb-2">
            Type d&apos;établissement
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
          <Link href={"/diplomes"}>
            <button
              type="submit"
              className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
            >
              Passer à l&apos;étape suivante
            </button>
          </Link>
        </div>
        <div className="text-center mt-6">
          <Link href="/login">
            <button className="text-blue-600 hover:underline">
              Retourner à la page de connexion
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SchoolInfo;
