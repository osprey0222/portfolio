import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Asher Ito </span>
            from <span className="purple"> Singapore.</span>
            <br /> I am a senior software developer. I have over 7 years of experience in Software development.
            <br />
            Additionally, I am currently self-employed.
            <br />
            <br />
            I'm majoring in
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Mobile or Video Game Development
            </li>
            <li className="about-activity">
              <ImPointRight /> WebSite Development
            </li>
            <li className="about-activity">
              <ImPointRight /> App Development
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Asher Ito</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
