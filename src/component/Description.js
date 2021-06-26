import React from "react";
import { Container, Jumbotron, Row, Col } from "react-bootstrap";
import descImage from "../assets/image/description.jpg";
import "./Description.scss";

const Description = () => {
  return (
    <div className="description">
      <Container>
        <Col className="justify-content-md-center">
          <img src={descImage} alt="" />
        </Col>
        <Col className="justify-content-md-center">
          <Row>
            <h1>APA ITU BRAWIJAYA MOVIE FESTIVAL</h1>
          </Row>
        </Col>
      </Container>
    </div>
  );
};

export default Description;
