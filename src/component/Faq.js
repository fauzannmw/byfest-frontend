import React from "react";
import { Container, Jumbotron, Row, Col, Card, Button } from "react-bootstrap";
import Accordion from "./Accordion";

import "./Faq.scss";

const Faq = () => {
  return (
    <div className="faq">
      <Container>
        <Row className="justify-content-md-center">
          <h1>F A Q</h1>
        </Row>
        <Row className="justify-content-md-center">
          <Accordion
            title="What da dawg doin?"
            content="Be sure to test any solution across different Reader preferences. A site visitor may have their browser set to open the PDF in Reader/Acrobat as opposed to the browser, e.g., by disabling the Acrobat plugin in Firefox. I can't be sure of my results, because I have two different Acrobat "
          />
          <Accordion
            title="What da dawg doin?"
            content="
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </br>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </br>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        "
          />
        </Row>
      </Container>
    </div>
  );
};

export default Faq;
