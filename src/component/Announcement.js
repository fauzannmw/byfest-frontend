import React from "react";
import { Container, Jumbotron, Row, Col } from "react-bootstrap";
import "./Announcement.css";

const Announcement = () => {
  return (
    <div className="announcement">
      <Container>
        <Row className="justify-content-center">
          <h1>P E N G U M U M A N</h1>
        </Row>
        <Row className="justify-content-center">
          <button>Lihat Catalog Event</button>
        </Row>
      </Container>
    </div>
  );
};

export default Announcement;
