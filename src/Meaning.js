import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <section className="wordResults">
        <h3>{props.meaning.partOfSpeech}</h3>
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <div>
                <div className="Definition">{definition.definition}</div>

                <div className="Example">{definition.example}</div>
                <div>
                  <Synonyms synonyms={props.meaning.synonyms} />
                </div>
              </div>
              <br />
              <br />
            </div>
          );
        })}
      </section>
    </div>
  );
}
