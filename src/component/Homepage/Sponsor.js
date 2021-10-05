import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
// import img1 from "../../assets/image/sponsor_icon_1.png";
import post from "../../api/post";
import "./Sponsor.scss";

const Sponsor = () => {
  const [sponsorships, setSponsorhip] = useState([]);
  const fotoSponsor = [];

  useEffect(async () => {
    await post.get(`/sponsor`).then(async (res) => {
      setSponsorhip(res.data);
    });
  }, []);

  const handleSubstringFoto = (e, idx) => { 
    const linkLogo = "https://drive.google.com/uc?export=view&id=" + e.substring(33,80);
    fotoSponsor[idx] = linkLogo;
  };

  return (
    <div className="sponsor">
      <Container>
        <Row className="justify-content-center mb-4">
          <h1>S P O N S O R</h1>
        </Row>
        <Row className="justify-content-center">
          {/* <b>
            <h2>Coming Soon</h2>
          </b> */}
          {sponsorships.map((sponsorship, idx) => (
            <Col xs={6} md={4} className="text-center">
              { handleSubstringFoto(sponsorship.Logo, idx) }
              <img src={ fotoSponsor[idx] } alt="" />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Sponsor;
