import React, { useState } from "react";
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
    "Salle de méditation / prière",
    "Infirmerie",
    "Wi-Fi sur le campus",
    "Hébergement pour étudiants (internat)",
    "Accès aux personnes à mobilité réduite",
    "Jardin / espace vert",
    "Salle de conférence",
    "Atelier de robotique",
    "Studio de photographie",
    "Cuisine pédagogique",
    "Espace pour les clubs étudiants",
    "Salle de tutorat / étude",
    "Aire de jeux pour enfants",
    "Transport scolaire",
    "Conseiller d'orientation",
    "Programme d'échange international",
    "Partenariats avec des entreprises locales",
    "Programme de stages",
    "Terrain de sport (football, basket, etc.)",
  ];

  const [selectedServices, setSelectedServices] = useState({});

  const handleServiceChange = (service) => {
    setSelectedServices((prev) => ({
      ...prev,
      [service]: !prev[service],
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Traitement des données sélectionnées
    console.log(selectedServices);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">
        Services et Installations
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {servicesList.map((service, index) => (
          <div key={index} className="flex items-center">
            <input
              type="checkbox"
              id={`service-${index}`}
              name={service}
              checked={selectedServices[service]}
              onChange={() => handleServiceChange(service)}
              className="mr-2"
            />
            <label htmlFor={`service-${index}`} className="text-lg">
              {service}
            </label>
          </div>
        ))}
        <Link href={"/services"}>
          <div className="flex justify-center mt-8">
            <button
              type="submit"
              className="px-6 py-3 text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Soumettre
            </button>
          </div>
        </Link>
      </form>
    </div>
  );
};

export default ServicesForm;
