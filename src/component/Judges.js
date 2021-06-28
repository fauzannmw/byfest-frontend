import React from "react";
import { Container, Jumbotron, Row, Col, Card } from "react-bootstrap";
import judges1 from "../assets/image/judges_1.jpg";
import "./Judges.scss";

const judges = () => {
  return (
    <div className="judges">
      <Container>
        <Row className="justify-content-md-center">
          <h1>B Y F E S T</h1>
        </Row>
        <Row className="justify-content-md-center">
          <h2>J U D G E S</h2>
        </Row>
        <Row className="justify-content-md-center">
          <Col md={6}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={judges1} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>xs=6 md=4</Col>
        </Row>
      </Container>
    </div>
  );
};

export default judges;
