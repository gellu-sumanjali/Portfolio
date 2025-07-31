import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I am <span className="purple">Sumanjali Gellu </span>
            from <span className="purple"> Hyderabad, India.</span>
            <br />
            I am currently employed as a dotnet developer at Winfo Solutions pvt ltd.
            <br />
            I have completed my graduation in B.Tech from Dr.VRK womens engineering college, Hyderabad in 2022.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring tech articles
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Mahabharatha
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Sumanjali</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
