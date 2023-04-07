import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  console.log(props.phonetic);
  return (
    <div className="Phonetic">
      <a
        href={props.phonetic.audio}
        className="Audio"
        target="_blank"
        rel="noreferrer"
      >
        Listen
      </a>
      <span className="phoneticText">{props.phonetic.text}</span>
    </div>
  );
}
