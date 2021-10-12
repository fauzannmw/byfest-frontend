import React, { Component } from "react";
import { Container, Row, Card } from "react-bootstrap";
import { Zoom } from "react-reveal";
import judges1 from "../../assets/image/judges_1.jpg";
import "./Judges.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class judges extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    const judges = [
      {
        title: "Alexander Matius",
        text: "Film programmer / curator",
        src: judges1,
      },
      {
        title: "Roufy Nasution",
        text: "Film director & Writer",
        src: judges1,
      },
      {
        title: "Umar Setyadi",
        text: "Cinematographer",
        src: judges1,
      },
    ];
    return (
      <div className="judges">
        <Container fluid>
          <Row className="justify-content-center">
            <h1>B Y F E S T</h1>
          </Row>
          <Row className="justify-content-center mb-5">
            <h2>J U D G E S</h2>
          </Row>
          <Slider {...settings}>
            {judges.map((judge) => {
              return (
                <div>
                  <Zoom cascade>
                    <Card style={{ width: "22rem" }}>
                      <Card.Img variant="top" src={judge.src} />
                      <Card.Body>
                        <Card.Title>{judge.title}</Card.Title>
                        <Card.Text>{judge.text}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Zoom>
                </div>
              );
            })}
          </Slider>
        </Container>
      </div>
    );
  }
}
