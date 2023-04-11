import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <section className="wordResults">
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index} className="Sections">
              <div className="definitionSections">
                <h3>{props.meaning.partOfSpeech}</h3>
                <div className="Definition">{definition.definition}</div>
                <div className="Example">{definition.example}</div>
                <div>
                  <span>
                    <Synonyms synonyms={props.meaning.synonyms} />
                  </span>{" "}
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
