import React from "react";
import { Container, Jumbotron, Row, Col } from "react-bootstrap";
import treeImage from "../assets/image/pengumuman-tree.png";
import "./Timeline.scss";

const timeline = () => {
  return (
    <div className="timeline">
      <Container>
        <Row className="justify-content-md-center">
          <h1>T I M E L I N E</h1>
        </Row>
        <Row className="justify-content-md-center">
          <img src={treeImage} alt="" />
        </Row>
      </Container>
    </div>
  );
};

export default timeline;
