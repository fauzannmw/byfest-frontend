import React from "react";
import { Container, Row } from "react-bootstrap";
// import Accordion from "./Accordion";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import "./Faq.scss";

const Faq = () => {
  return (
    <div className="faq">
      <Container>
        <Row className="justify-content-center mt-5">
          <h1>F A Q</h1>
        </Row>
        <Row className="justify-content-center">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              style={{
                backgroundColor: "#DEA450",
                outlineColor: "#354C3C",
                outlineWidth: "10px",
              }}
            >
              <h5>What da dawg doin?</h5>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              style={{
                backgroundColor: "#DEA450",
                outlineColor: "#354C3C",
                outlineWidth: "10px",
              }}
            >
              <h5>What da dawg doin?</h5>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              style={{
                backgroundColor: "#DEA450",
                outlineColor: "#354C3C",
                outlineWidth: "10px",
              }}
            >
              <h5>What da dawg doin?</h5>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              style={{
                backgroundColor: "#DEA450",
                outlineColor: "#354C3C",
                outlineWidth: "10px",
              }}
            >
              <h5>What da dawg doin?</h5>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              style={{
                backgroundColor: "#DEA450",
                outlineColor: "#354C3C",
                outlineWidth: "10px",
              }}
            >
              <h5>What da dawg doin?</h5>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </p>
            </AccordionDetails>
          </Accordion>
        </Row>
      </Container>
    </div>
  );
};

export default Faq;
