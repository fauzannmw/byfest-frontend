import React from "react";
import { Container, Jumbotron, Row, Col, Card } from "react-bootstrap";
import "./Faq.scss";
// import "./Contoh.css";

const Faq = () => {
  return (
    <div className="faq">
      <Container>
        <Row className="justify-content-md-center">
          <h1>B Y F E S T</h1>
        </Row>
        <Row className="justify-content-md-center">
          <h5>J U D G E S</h5>
        </Row>
        <div className="accordionMenu">
          <input type="radio" name="trg1" id="acc1" checked="checked" />
          <label for="acc1">Section 1</label>
          <div className="content">
            <div className="inner">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </div>
          </div>
          <input type="radio" name="trg1" id="acc2" />
          <label for="acc2">Section 2</label>
          <div className="content">
            <div className="inner">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Faq;
