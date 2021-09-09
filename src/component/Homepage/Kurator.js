import React, { Component } from "react";
import { Container, Row, Card } from "react-bootstrap";
import { Zoom } from 'react-reveal';
import kurator0 from "../../assets/image/kurator_1.png";
import kurator1 from "../../assets/image/kurator_2.png";
import kurator2 from "../../assets/image/kurator_3.png";
import "./Judges.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class kurator extends Component {
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
    const curators = [
      {
          title: "Ivanda Rizqy W. B.",
          text: "Ketua Umum NDF 2019-2020",
          src: kurator0
      },
      {
        title: "Andhika Prayoga",
        text: "Owner @cinemalinea",
        src: kurator1
      },
      {
        title: "Mahesa Desaga",
        text: "Award Winning Film Director",
        src: kurator2
      }
    ]
    return (
      <div className="judges">
        <Container fluid>
          <Row className="justify-content-center">
            <h1>B Y F E S T</h1>
          </Row>
          <Row className="justify-content-center mb-5">
            <h2>C U R A T O R</h2>
          </Row>
          <Slider {...settings}>
            {curators.map((curator) => {
              return (
                <div>
                  <Zoom cascade>
                  <Card style={{ width: "22rem" }}>
                    <Card.Img variant="top" src={curator.src} />
                    <Card.Body>
                      <Card.Title>{curator.title}</Card.Title>
                      <Card.Text>{curator.text}</Card.Text>
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
