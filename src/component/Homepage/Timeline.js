import React from "react";
import { Container, Row } from "react-bootstrap";
import Slide from "react-reveal"
import treeImage from "../../assets/image/pengumuman-tree.png";
import "./Timeline.scss";

const timeline = () => {
  return (
    <div className="timeline">
      <Container>
        <Row className="d-flex justify-content-center">
          <h1>T I M E L I N E</h1>
        </Row>
        <Row className="d-flex justify-content-center">
          <Slide bottom>
            <img src={treeImage} alt="" />
          </Slide>
        </Row>
      </Container>
    </div>
  );
};

export default timeline;
