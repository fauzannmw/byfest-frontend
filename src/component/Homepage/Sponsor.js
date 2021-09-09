import React from "react";
import { Container, Row } from "react-bootstrap";
// import img1 from "../../assets/image/sponsor_icon_1.png";
import "./Sponsor.scss";

const Sponsor = () => {
  return (
    <div className="sponsor">
      <Container>
        <Row className="justify-content-center mb-4">
          <h1>S P O N S O R</h1>
        </Row>
        <Row className="justify-content-center">
          <b>
            <h2>Coming Soon</h2>
          </b>
          {/* <Col xs={6} md={4} className="text-center">
            <img src={img1} alt="" />
          </Col>
          <Col xs={6} md={4} className="text-center">
            <img src={img1} alt="" />
          </Col>
          <Col xs={6} md={4} className="text-center">
            <img src={img1} alt="" />
          </Col>
          <Col xs={6} md={4} className="text-center">
            <img src={img1} alt="" />
          </Col>
          <Col xs={6} md={4} className="text-center">
            <img src={img1} alt="" />
          </Col>
          <Col xs={6} md={4} className="text-center">
            <img src={img1} alt="" />
          </Col> */}
        </Row>
      </Container>
    </div>
  );
};

export default Sponsor;
