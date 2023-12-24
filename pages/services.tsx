import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const ServicesForm = () => {
  const servicesList = [
    "Bibliothèque",
    "Laboratoire informatique",
    "Laboratoire scientifique",
    "Salle de sport",
    "Piscine",
    "Auditorium",
    "Cafétéria",
    "Salle de musique",
    "Studio d'art",
    "Théâtre",
    "Espace de danse",
    "Infirmerie",
    "Wi-Fi sur le campus",
    "Hébergement pour étudiants (internat)",
    "Accès aux personnes à mobilité réduite",
    "Jardin / espace vert",
    "Salle de conférence",
    "Atelier de robotique",
    "Studio de photographie",
    "Espace pour les clubs étudiants",
    "Salle de tutorat / étude",
    "Transport scolaire",
    "Conseiller d'orientation",
    "Programme d'échange international",
    "Partenariats avec des entreprises locales",
    "Programme de stages",
    "Terrain de sport (football, basket, etc.)",
  ];
  const [selectedServices, setSelectedServices] = useState<
    Record<string, boolean>
  >({});
  const router = useRouter();

  const handleServiceChange = (service: string) => {
    setSelectedServices((prev) => ({
      ...prev,
      [service]: !prev[service],
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Logique pour traiter les services sélectionnés
    console.log(selectedServices);
    router.push("/nextStep"); // Redirection après la soumission
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-4">Services proposés</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {servicesList.map((service, index) => (
          <div key={index} className="flex items-center mb-2">
            <input
              type="checkbox"
              id={`service-${index}`}
              checked={selectedServices[service] || false}
              onChange={() => handleServiceChange(service)}
              className="mr-2"
            />
            <label htmlFor={`service-${index}`} className="text-lg">
              {service}
            </label>
          </div>
        ))}
        <div className="flex justify-center mt-8">
          <Link href="/confirmation">
            <button
              type="submit"
              className="px-6 py-3 text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Soumettre
            </button>
          </Link>
        </div>
        <div className="text-center mt-6">
          <Link href="/diplomes">
            <button className="text-blue-600 hover:underline">Retour</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default ServicesForm;
