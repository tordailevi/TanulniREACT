      import React, { useContext } from "react";
      import Kerdes from "./Kerdes";
      import { KerdesekContext } from "../../contexts/KerdesekContext";

      export default function Kerdesek() {
        const { kerdesekLista,loading, pont } = useContext(KerdesekContext); //a context adatainak használata
        if (loading) {
          // Betöltés alatt ezt jeleníti meg
          return <div>Betöltés folyamatban...</div>;
        }
        if (!kerdesekLista || kerdesekLista.length === 0) {
          // Ha nincs adat
          return <div>Nincsenek kérdések.</div>;
        }
      return (
          <div className="">
            <h2>Kérdések</h2> 
            <p>Elért pontszám: {pont}</p>
            <div className="card">
            {kerdesekLista.map((kerdes) => (
              <Kerdes key={kerdes.id} kerdes={kerdes} />
            ))}
            </div>
          </div>
        );
      }