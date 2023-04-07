import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import "./Results.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Results(props) {
  if (props.results) {
    return (
      <Container>
        <div className="Results">
          <Row>
            <Col sm={5}>
              <section className="Primary">
                <h2>{props.results.word}</h2>
                {props.results.phonetics.map(function (phonetic, index) {
                  return (
                    <div key={index}>
                      <Phonetics phonetic={phonetic} />
                    </div>
                  );
                })}
              </section>
            </Col>
            <Col sm={7}>
              <div className="definition">
                {props.results.meanings.map(function (meaning, index) {
                  return (
                    <div key={index}>
                      <Meaning meaning={meaning} />
                    </div>
                  );
                })}
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    );
  } else {
    return null;
  }
}
