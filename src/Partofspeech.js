import React from "react";

export default function Partofspeech(props) {
  if (props.partOfSpeech.length > 0) {
    return (
      <ul className="Partofspeech">
        {props.partOfSpeech.map(function (partOfSpeech, index) {
          return <li key={index}>{partOfSpeech}</li>;
        })}
      </ul>
    );
  } else {
    return <div>Not available</div>;
  }
}
