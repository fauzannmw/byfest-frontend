import React from "react";
import { Container, Jumbotron, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Announcement.scss";

const Announcement = () => {
  return (
    <div className="announcement">
      <Container>
        <Row className="justify-content-center">
          <h1>P E N G U M U M A N</h1>
        </Row>
        <Row className="justify-content-center">
          <Link to="/catalog">
            <button>Lihat Catalog Event</button>
          </Link>
        </Row>
      </Container>
    </div>
  );
};

export default Announcement;
