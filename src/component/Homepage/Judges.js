// import React from "react";
// import { Container, Row, Col, Card } from "react-bootstrap";
// import judges1 from "../../assets/image/judges_1.jpg";
// import "./Judges.scss";

// const judges = () => {
//   return (
// <div className="judges">
//   <Container>
//     <Row className="justify-content-center">
//       <h1>B Y F E S T</h1>
//     </Row>
//     <Row className="justify-content-center">
//       <h2>J U D G E S</h2>
//     </Row>
//     <Row className=" d-flex justify-content-center">
//       <Col md={6} className="d-flex justify-content-center">
//         <Card style={{ width: "22rem" }}>
//           <Card.Img variant="top" src={judges1} />
//           <Card.Body>
//             <Card.Title>STEVE AOKI</Card.Title>
//             <Card.Text>Film Enthusiast</Card.Text>
//           </Card.Body>
//         </Card>
//       </Col>
//       <Col md={6} className=" d-flex justify-content-center">
//         <Card style={{ width: "22rem" }}>
//           <Card.Img variant="top" src={judges1} />
//           <Card.Body>
//             <Card.Title>STEVE AOKI</Card.Title>
//             <Card.Text>Film Enthusiast</Card.Text>
//           </Card.Body>
//         </Card>
//       </Col>
//       <Col md={6} className=" d-flex justify-content-center">
//         <Card style={{ width: "22rem" }}>
//           <Card.Img variant="top" src={judges1} />
//           <Card.Body>
//             <Card.Title>STEVE AOKI</Card.Title>
//             <Card.Text>Film Enthusiast</Card.Text>
//           </Card.Body>
//         </Card>
//       </Col>
//     </Row>
//   </Container>
// </div>;
//   );
// };

// export default judges;

import React, { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
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
            {/* <Row className=" d-flex justify-content-center"> */}
            <div>
              {/* <Col className="d-flex justify-content-center"> */}
              <Card style={{ width: "22rem" }}>
                <Card.Img variant="top" src={judges1} />
                <Card.Body>
                  <Card.Title>STEVE AOKI</Card.Title>
                  <Card.Text>Film Enthusiast</Card.Text>
                </Card.Body>
              </Card>
              {/* </Col> */}
            </div>
            <div>
              {/* <Col className="d-flex justify-content-center"> */}
              <Card style={{ width: "22rem" }}>
                <Card.Img variant="top" src={judges1} />
                <Card.Body>
                  <Card.Title>STEVE AOKI</Card.Title>
                  <Card.Text>Film Enthusiast</Card.Text>
                </Card.Body>
              </Card>
              {/* </Col> */}
            </div>
            <div>
              {/* <Col className="d-flex justify-content-center"> */}
              <Card style={{ width: "22rem" }}>
                <Card.Img variant="top" src={judges1} />
                <Card.Body>
                  <Card.Title>STEVE AOKI</Card.Title>
                  <Card.Text>Film Enthusiast</Card.Text>
                </Card.Body>
              </Card>
              {/* </Col> */}
            </div>
            <div>
              {/* <Col className="d-flex justify-content-center"> */}
              <Card style={{ width: "22rem" }}>
                <Card.Img variant="top" src={judges1} />
                <Card.Body>
                  <Card.Title>STEVE AOKI</Card.Title>
                  <Card.Text>Film Enthusiast</Card.Text>
                </Card.Body>
              </Card>
              {/* </Col> */}
            </div>
            <div>
              {/* <Col className="d-flex justify-content-center"> */}
              <Card style={{ width: "22rem" }}>
                <Card.Img variant="top" src={judges1} />
                <Card.Body>
                  <Card.Title>STEVE AOKI</Card.Title>
                  <Card.Text>Film Enthusiast</Card.Text>
                </Card.Body>
              </Card>
              {/* </Col> */}
            </div>
            {/* </Row> */}
          </Slider>
        </Container>
      </div>
    );
  }
}
