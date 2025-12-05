    import React, { useContext, useState } from "react";
    import { KerdesekContext } from "../../contexts/KerdesekContext";

    export default function Valasz({ valasz, valaszolt, valszKezeles }) {
      const [helyes, setHelyes] = useState(null);
      const { setPont } = useContext(KerdesekContext);
      function kivalaszt() {          
        if (valasz.right_answer) {
          setPont(prev => prev + 1); 
        }         
      }
      const bgColor = helyes === null ? "white" : helyes ? "lightgreen" : "salmon";
      return (
        <div
          className="col-6 p-2 border"
          onClick={kivalaszt}
          style={{ backgroundColor: bgColor, cursor: "pointer" }}
        >
          {valasz.answer_text}
        </div>
      );
    }