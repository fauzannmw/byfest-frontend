import React from "react";
import { Container, Row } from "react-bootstrap";
// import img1 from "../../assets/image/sponsor_icon_1.png";
import post from "../../api/post";
import "./Sponsor.scss";

const Sponsor = () => {
  const [sponsorships, setSponsorhip] = useState([]);

  useEffect(async () => {
    await post.get(`sponsor`).then(async (res) => {
      setSponsor(res.data);
    });
  }, []);

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
          {sponsorships.map((sponsorship) => (
            <Col xs={6} md={4} className="text-center">
              <img src={sponsorship.Logo} alt="" />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Sponsor;
