import React, { useState } from "react";
import { Container, Jumbotron, Row, Col } from "react-bootstrap";
import bgImage from "../assets/Jumbotron-Byfest.png";
import logoUtama from "../assets/image/byfest_kuning.png";
import "./Hero.scss";
import { useEffect } from "react";


const Hero = () => {
  const [offsetY, setOffSetY] = useState(0);
  const handleScroll = () => setOffSetY(window.pageYOffset);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className="hero"
      style={{ transform: `translateY(${offsetY * 0.5}px)` }}
    >
      <Container>
        {/* className="container-hero" */}
        {/* <img src={bgImage} alt="" /> */}
        <img src={logoUtama} alt="" style={{ height: "265px" }} />
        <Row className="justify-content-md-center">
          <Col md="auto">
            <h1>BRAWIJAYA MOVIE FESTIVAL</h1>
          </Col>
        </Row>
        <p>19 - 20 Oktober 2021</p>
      </Container>
    </div>
  );
};

export default Hero;
