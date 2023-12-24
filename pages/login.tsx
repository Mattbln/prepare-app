// pages/login.tsx
import React, { useState } from "react";
import { useRouter } from "next/router";
import fakeDatabase from "./api/fakeDatabase";
import Link from "next/link";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();
  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();

    const etablissement = fakeDatabase.etablissements[email];

    if (etablissement && etablissement.password === password) {
      router.push("/schoolInfo");
    } else {
      setErrorMessage(" Email ou mot de passe incorrect.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg rounded">
        <h3 className="text-2xl font-bold text-center">
          Connexion à votre compte
        </h3>
        <form onSubmit={handleLogin}>
          {errorMessage && (
            <div
              className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
              role="alert"
            >
              <strong className="font-bold">Erreur :</strong>
              <span className="block sm:inline">{errorMessage}</span>
            </div>
          )}
          <div className="mt-4">
            <div>
              <label className="block" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mt-4">
              <label className="block" htmlFor="password">
                Mot de passe
              </label>
              <input
                type="password"
                placeholder="Mot de passe provisoire"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="flex items-baseline justify-between">
              <button className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">
                Se connecter
              </button>
            </div>
          </div>
        </form>
        <div className="text-center mt-6">
          <p className="text-sm">
            Si vous n&apos;avez pas vos identifiants,
            <Link href="/contact">
              {" "}
              {/* Assurez-vous que le chemin '/contact' est correct */}
              <button className="text-blue-600 hover:underline">
                {" "}
                contactez nous
              </button>
            </Link>
            .
          </p>
        </div>
        <div className="text-center mt-6">
          <Link href="/">
            <button className="text-blue-600 hover:underline">
              Retourner à l&apos;accueil
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
