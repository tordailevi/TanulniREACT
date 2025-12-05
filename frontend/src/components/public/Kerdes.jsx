      import React from "react";
      import Valasz from "./Valasz";

      export default function Kerdes({ kerdes }) {
      
        const [valaszolt,setValaszolt]=useState(false)

        return (
          <div className="card  m-2">
              <div className="card-body">
            <h5 className="card-title">{kerdes.question_text}</h5>

            <ul className="row g-2 p-0">
              {kerdes.answers.map((valasz) => (
                <Valasz key={valasz.id} valasz={valasz} />
              ))}
            </ul>
            </div>
          </div>
        );
      }