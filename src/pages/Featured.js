import { Row, Col, Card, Image, Modal } from "react-bootstrap";
import GlobalNavbar from "../component/GlobalNavbar";
import GlobalFooter from "../component/GlobalFooter";
import "./Featured.scss";
import Poster from "../assets/image/poster.jpg";
import { useState } from "react";

const Featured = () => {

    const posterFilms = [
        {
            judul: "LION",
            direktor: "Arga"
        },{
            judul: ".fana",
            direktor: "Arga"
        },{
            judul: "A Night of Nirvana",
            direktor: "Arga"
        },{
            judul: "The Martion",
            direktor: "Arga"
        }
    ]
    const [postingan, setPostingan] = useState([]);
    const [show, setShow] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = (id) => setShow(id);

    return(
        <div className="featured">

            <GlobalNavbar active="featured" />

            <div className="content">
                <div className="container">
                    <h1>FEATURED FILMS</h1>
                    <Row xs={1} md={2} className="g-4">
                        { posterFilms.map((posterFilm) => (
                            <Col xs={12} md={6} lg={4} className="column">
                                {/* <Card>
                                    <Card.Img variant="top" src={ Poster }/>
                                    <Card.Body>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text>
                                        This is a longer card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit longer.
                                    </Card.Text>
                                    </Card.Body>
                                </Card> */}
                                <div className="poster-wrapper">
                                    <img
                                    src={ Poster }
                                    width="250"
                                    className="d-inline-block align-top"
                                    alt="Brawijaya Film Festival"
                                    />
                                    <h3>{ posterFilm.judul }</h3>
                                    <p>{ posterFilm.direktor }</p>
                                    <button className="button-poster" onClick={ (e) => handleShow(posterFilm.judul)}>view</button>
                                </div>
                                <Modal className="modal-poster" show={show == `${posterFilm.judul}`} onHide={handleClose}>
                                        <div className="modal-wrapper">
                                            <Modal.Header closeButton>
                                                {/* <Modal.Title></Modal.Title> */}
                                                <Row className="col-wrapper">
                                                    <Col xs={12} md={6} lg={6} className="kiri">
                                                        test
                                                    </Col>
                                                    <Col xs={12} md={6} lg={6}>
                                                        test
                                                    </Col>
                                                </Row>
                                                {/* <div className="kiri">kiri</div>
                                                <div className="kanan">kanan</div> */}

                                            </Modal.Header>
                                            <Modal.Body>
                                                <h3>{ posterFilm.judul }</h3>
                                                <p>{ posterFilm.direktor }</p>
                                            </Modal.Body>
                                        </div>
                                </Modal>
                            </Col>
                        )) }
                    </Row>
                </div>
            </div> 

           <GlobalFooter />

        </div>
    )
}

export default Featured;