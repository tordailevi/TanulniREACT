import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const KerdesekContext = createContext();

export function KerdesekProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [kerdesekLista, setKerdesekLista] = useState([]);
  const [pont, setPont] = useState(0);

  function getKerdesek() {
    axios
      .get("http://127.0.0.1:8000/api/questions")
      .then((response) => {
        setKerdesekLista(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }

    useEffect(() => {
        getKerdesek();
    }, []);

  return (
    <KerdesekContext.Provider value={{ kerdesekLista, loading, pont, setPont }}>
      {children}
    </KerdesekContext.Provider>
  );
}
