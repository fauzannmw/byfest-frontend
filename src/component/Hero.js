import React from "react";
import { Container } from "react-bootstrap";
import Jumbotron from "react-bootstrap/Jumbotron";
import bgImage from "../assets/Jumbotron-Byfest.png";
const Hero = () => {
  return (
    <Jumbotron
      fluid
      style={{ backgroundImage: `url(${bgImage})`, height: "100%" }}
    >
      <Container>
        <h1>Fluid jumbotron</h1>
        <p>
          This is a modified jumbotron that occupies the entire horizontal space
          of its parent.
        </p>
      </Container>
    </Jumbotron>
  );
};

export default Hero;
