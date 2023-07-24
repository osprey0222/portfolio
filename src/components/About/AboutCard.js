import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            {/* Hi Everyone, I am <span className="purple">Asher Ito </span>
            from <span className="purple"> Singapore.</span> */}
            <br /> With a strong understanding of game mechanics, I lead at creating engaging gameplay, implementing complex systems, and optimizing performance to deliver seamless user experiences.
            <br />
            <br />
            {/* I'm majoring in */}
          </p>
          {/* <ul>
            <li className="about-activity">
              <ImPointRight /> Mobile or Video Game Development
            </li>
            <li className="about-activity">
              <ImPointRight /> WebSite Development
            </li>
            <li className="about-activity">
              <ImPointRight /> App Development
            </li>
          </ul> */}

          <p style={{ color: "rgb(155 126 172)" }}>
            "To give real service you must add something which cannot be bought or measured with money, and that is sincerity and integrity.

            "{" "}
          </p>
          <footer className="blockquote-footer">Douglas Adams</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
