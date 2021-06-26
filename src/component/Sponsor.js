import React from "react";
import { Container, Jumbotron, Row, Col } from "react-bootstrap";
import img1 from "../assets/image/sponsor_icon_1.png";
import "./Sponsor.scss";

const Sponsor = () => {
  return (
    <div className="sponsor">
      <Container>
        <Row className="justify-content-md-center">
          <h1>S P O N S O R</h1>
        </Row>
        <Row className="justify-content-md-center">
          <Col className="justify-content-md-center" md={4}>
            <img src={img1} alt="" />
          </Col>
          <Col className="justify-content-md-center" md={4}>
            <img src={img1} alt="" />
          </Col>
          <Col className="justify-content-md-center" md={4}>
            <img src={img1} alt="" />
          </Col>
          <Col className="justify-content-md-center" md={4}>
            <img src={img1} alt="" />
          </Col>
          <Col className="justify-content-md-center" md={4}>
            <img src={img1} alt="" />
          </Col>
          <Col className="justify-content-md-center" md={4}>
            <img src={img1} alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Sponsor;
