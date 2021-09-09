// import { Row, Col, Card, Image, Modal } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import GlobalNavbar from "../component/GlobalNavbar";
// import GlobalFooter from "../component/GlobalFooter";
import "./Program.scss";
// import Poster from "../assets/image/poster.jpg";
// import Screenshot from "../assets/image/screenshot.jpg";
// import { useState } from "react";
import { Helmet } from "react-helmet";
// import CloseButton from '@material-ui/icons/Close'

const Program = () => {
  // const posterFilms = [
  //       {
  //           judul: "LION",
  //           direktor: "Arga"
  //       },{
  //           judul: ".fana",
  //           direktor: "Arga"
  //       },{
  //           judul: "A Night of Nirvana",
  //           direktor: "Arga"
  //       },{
  //           judul: "The Martian",
  //           direktor: "Arga"
  //       }
  //   ]
  //   const [postingan, setPostingan] = useState([]);
  //   const [show, setShow] = useState('');

  // const handleClose = () => setShow(false);
  // const handleShow = (id) => setShow(id);

  return (
    <div className="featured">
      <Helmet>
        <title>Featured Films</title>
      </Helmet>

      <div className="content">
        <div className="container">
          {/* <h1>PROGRAM</h1> */}
          <div className="coming-soon">
              <h1>Coming Soon</h1>
              <p>Don't miss the show, mark your calendar!</p>
          </div>
          {/* <Row xs={1} md={1} className="g-4">
            <div className="coming-soon">
              <h1>Coming Soon</h1>
              <p></p>
            </div>
            {posterFilms.map((posterFilm) => (
              <Col xs={12} md={6} lg={4} className="column">
                <div className="poster-wrapper">
                  <img
                    src={Poster}
                    width="250"
                    className="d-inline-block align-top"
                    alt="Brawijaya Film Festival"
                  />
                  <h3>{posterFilm.judul}</h3>
                  <p>{posterFilm.direktor}</p>
                  <button
                    className="button-poster"
                    onClick={(e) => handleShow(posterFilm.judul)}
                  >
                    view
                  </button>
                </div>
                <Modal
                  className="modal-poster"
                  show={show == `${posterFilm.judul}`}
                  onHide={handleClose}
                  size="lg"
                >
                  <div className="modal-wrapper">
                    <Modal.Header>
                      <Row className="col-wrapper">
                        <Col
                          xs={12}
                          md={12}
                          lg={12}
                          className="column tombol-tutup"
                        >
                          <a onClick={handleClose}>
                            <CloseButton />
                          </a>
                        </Col>
                        <Col xs={6} md={5} lg={3} className="column kiri">
                          <img
                            src={Poster}
                            className="poster-preview d-inline-block align-top"
                            alt="screenshot"
                            // height="100"
                          />
                        </Col>
                        <Col xs={6} md={7} lg={9} className="column kanan">
                          <div className="kanan-inner">
                            <h3>{posterFilm.judul}</h3>
                            <p>{posterFilm.direktor}</p>
                            <p>Studio</p>
                            <p>
                              I can't be sure of my results, because I have two
                              different Acrobat plugins that Firefox recognizes
                              due to my having different versions of Adobe
                              Acrobat and Adobe Reader, but it does appear that
                              you at least need to test what happens if a
                              website visitor has their browser set to not open
                              the PDF in the browser. It could be quite annoying
                              when they look at what appears to be an{" "}
                            </p>
                          </div>
                        </Col>
                      </Row>
                    </Modal.Header>
                    <Modal.Body>
                      <h3>Screenshot</h3>
                      <Row xs={1} md={2} className="g-4">
                        {["Primary", "Secondary", "Success", "Danger"].map(
                          (variant, idx) => (
                            <Col>
                              <Card
                                key={idx}
                                className="screenshot-wrapper"
                              >
                                <img
                                  src={Screenshot}
                                  className="screenshot d-inline-block align-top"
                                  alt="screenshot"
                                />
                              </Card>
                            </Col>
                          )
                        )}
                      </Row>
                    </Modal.Body>
                  </div>
                </Modal>
              </Col>
            ))}
          </Row> */}
        </div>
      </div>

      {/* <GlobalFooter /> */}
    </div>
  );
};

export default Program;
