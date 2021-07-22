// import React, { useState } from "react";
// import { useEffect } from "react";
// import { Container, Jumbotron, Row, Col } from "react-bootstrap";
// import bgImage from "../assets/Jumbotron-Byfest.png";
// import logoUtama from "../assets/image/byfest_kuning.png";
// import "./HeroNew.scss";

// export default function HeroNew() {
//   const [offset, setOffSet] = useState();
//   const handleScroll = () => setOffSet(window.pageYOffset);
//   window.addEventListener("scroll", handleScroll);
//   return (
//     <div className="hero">
//       <div
//         className="background"
//         style={{ width: 100 + offset * 0.3 + "%" }}
//       ></div>
//       <div className="content">
//         <Container>
//           <img src={logoUtama} alt="" style={{ height: "265px" }} />
//           <Row className="justify-content-md-center">
//             <Col md="auto">
//               <h1>BRAWIJAYA MOVIE FESTIVAL</h1>
//             </Col>
//           </Row>
//           <p>19 - 20 Oktober 2021</p>
//         </Container>
//       </div>
//     </div>
//   );
// }
