import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Bienvenue sur{" "}
          <a className="text-blue-600" href="https://www.parcoursup.gouv.fr/">
            Prepare!
          </a>
        </h1>

        <Link href="/login">
          <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
            <Button className="bg-blue-600 text-white font-bold py-2 px-4 rounded-full hover:bg-white hover:text-blue-600 border border-blue-600 transition duration-300">
              Commencer
            </Button>
          </div>
        </Link>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        Produit avec ❤️ par{" "}
        <a className="text-blue-600 " href="https://www.oxpium.fr/">
          &nbsp;Oxpium Agency
        </a>
      </footer>
    </div>
  );
};

export default Home;
