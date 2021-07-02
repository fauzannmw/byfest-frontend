import React from "react";
import {
  Container,
  Jumbotron,
  Row,
  Col,
  Card,
  Accordion,
  Button,
} from "react-bootstrap";
import { Helmet } from "react-helmet";

// import "./Faq.scss";
import "./Faq.css";

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

const Faq = () => {
  return (
    <div className="faq">
      <Helmet>
        <meta charSet="utf-8" />
        {/* <title>My Title</title> */}
        {/* <link rel="canonical" href="http://example.com/example" /> */}
        <script src="/src/component/Accordion.js" type="text/javascript" />
      </Helmet>
      <Container>
        <Row className="justify-content-md-center">
          <h1>B Y F E S T</h1>
        </Row>
        <Row className="justify-content-md-center">
          <h5>J U D G E S</h5>
        </Row>
        <button className="accordion">Section 1</button>
        <div className="panel">
          <p>Lorem ipsum...</p>
        </div>

        <button className="accordion">Section 2</button>
        <div className="panel">
          <p>Lorem ipsum...</p>
        </div>

        <button className="accordion">Section 3</button>
        <div className="panel">
          <p>Lorem ipsum...</p>
        </div>
      </Container>
    </div>
  );
};

export default Faq;
