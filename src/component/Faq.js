import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Accordion from "./Accordion";

import "./Faq.scss";

const Faq = () => {
  return (
    <div className="faq">
      <Container>
        <Row className="justify-content-center mt-5">
          <h1>F A Q</h1>
        </Row>
        <Row className="justify-content-center">
          <Accordion
            title="What da dawg doin?"
            content="<p>Be sure to test any solution across different Reader preferences. A site visitor may have their browser set to open the PDF in Reader/Acrobat as opposed to the browser, e.g., by disabling the Acrobat plugin in Firefox. I can't be sure of my results, because I have two different Acrobat</p>"
          />
          <Accordion
            title="What da dawg doin?"
            content="
            <p>Be sure to test any solution across different Reader preferences. A site visitor may have their browser set to open the PDF in Reader/Acrobat as opposed to the browser, e.g., by disabling the Acrobat plugin in Firefox. I can't be sure of my results, because I have two different Acrobat</p>"
          />
          <Accordion
            title="What da dawg doin?"
            content="
            <p>Be sure to test any solution across different Reader preferences. A site visitor may have their browser set to open the PDF in Reader/Acrobat as opposed to the browser, e.g., by disabling the Acrobat plugin in Firefox. I can't be sure of my results, because I have two different Acrobat</p>"
          />
          <Accordion
            title="What da dawg doin?"
            content="
            <p>Be sure to test any solution across different Reader preferences. A site visitor may have their browser set to open the PDF in Reader/Acrobat as opposed to the browser, e.g., by disabling the Acrobat plugin in Firefox. I can't be sure of my results, because I have two different Acrobat</p>"
          />
        </Row>
      </Container>
    </div>
  );
};

export default Faq;
