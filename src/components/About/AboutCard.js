import React from "react";
import Card from "react-bootstrap/Card";
import { ImForward } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I am <span className="purple">Jeffry Delgado Sánchez </span>
            from <span className="purple"> San José, Costa Rica.</span>
            <br />I am a web developer.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImForward /> Watch movies and tv series
            </li>
            <li className="about-activity">
              <ImForward /> Playing video games
            </li>
            <li className="about-activity">
              <ImForward /> Learn
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
