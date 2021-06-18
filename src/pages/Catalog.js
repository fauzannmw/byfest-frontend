import { useEffect, useState } from "react";
import { Tab, Tabs, Button, Navbar, Nav,Row, Col, Modal } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Sonnet from "../component/Sonnet";
import GambarPengumuman from "../assets/image/pengumuman.jpg";
import LogoNavbar from "../assets/image/byfest_hijau.png";
import "./Catalog.scss";
import post from '../api/post';
var parseString = require('xml2js').parseString;

const Catalog = () => {
    const catalogs = [
        {
            key: "Roadshow",
            header: "Byfest Roadshow",
            content: "Be sure to test any solution across different Reader preferences. A site visitor may have their browser set to open the PDF in Reader/Acrobat as opposed to the browser, e.g., by disabling the Acrobat plugin in Firefox."
        },
        {
            key: "Webinar",
            header: "Byfest Webinar",
            content: "Be sure to test any solution across different Reader preferences. A site visitor may have their browser set to open the PDF in Reader/Acrobat as opposed to the browser, e.g., by disabling the Acrobat plugin in Firefox."
        },
        {
            key: "Awarding",
            header: "Byfest Awarding",
            content: "Be sure to test any solution across different Reader preferences. A site visitor may have their browser set to open the PDF in Reader/Acrobat as opposed to the browser, e.g., by disabling the Acrobat plugin in Firefox."
        }
    ]

    const [postingan, setPostingan] = useState([]);
    const [show, setShow] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = (id) => setShow(id);

    useEffect(async () => {
        // const resPost = await post.get(`14276`);
        const resPost = await post.get(`sheet1`);
        // console.log(resPost);
        setPostingan(resPost.data);
        // console.log(postingan);
        // parseString(resPost.data, function (err, result) {
        //     console.dir(result);
        // });
    },[])

    

    return(
        <div className="catalog">
            <div className="navbar-custom">
                <div className="container">
                <Navbar variant="dark">
                    <Navbar.Brand href="#home" className="mr-auto">
                        {/* <div className="navbar-logo"></div> */}
                        <img
                            src={ LogoNavbar }
                            width="70"
                            height="70"
                            className="d-inline-block align-top"
                            alt="Brawijaya Film Festival"
                        />
                    </Navbar.Brand>
                    <Nav>
                        <Link to="/catalog">
                            <button className="navbar-button aktif">Catalog Event</button>
                        </Link>
                        <Link to="/featured">
                            <button className="navbar-button">Featured</button>
                        </Link>
                        <Link to="/submission">
                            <button className="navbar-button submission">Film Submission</button>
                        </Link>
                        {/* <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                    </Nav>
                </Navbar>
                </div>
            </div>

            <div className="content">
                <div className="container">
                    <h1>CATALOG EVENT</h1>
                    <Tabs defaultActiveKey="Roadshow" transition={false} id="noanim-tab-example">
                        {/* {catalogs.map(catalog => (
                            <TabCatalog key={ catalog.key } header={ catalog.header } content={ catalog.content }/>
                        ))} */}
                        <Tab eventKey={ catalogs[0].key } title={ catalogs[0].key }>
                            <Sonnet header={ catalogs[0].header } content={ catalogs[0].content } />
                        </Tab>
                        <Tab eventKey={ catalogs[1].key } title={ catalogs[1].key }>
                            <Sonnet header={ catalogs[1].header } content={ catalogs[1].content } />
                        </Tab>
                        <Tab className="nav-link-kanan" eventKey={ catalogs[2].key } title={ catalogs[2].key }>
                            <Sonnet header={ catalogs[2].header } content={ catalogs[2].content } />
                        </Tab>
                    </Tabs>
                    
                    <h1>PENGUMUMAN</h1>
                    {
                        postingan.map((posting) => (
                            <div className="pengumuman">
                                <div className="card-pengumuman">
                                    <Row>
                                        <Col xs={4} className="kiri">

                                        </Col>
                                        <Col xs={8} className="kanan">
                                            <div className="kanan-inner">
                                                <h3>{ posting.Judul }</h3>
                                                <p className="tanggal">{ posting.Timestamp }</p>
                                                <p>{ posting.Caption }</p>
                                                <button className="button-pengumuman" onClick={ (e) => handleShow(posting.Judul)}>
                                                    View More
                                                </button>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                    <Modal show={show == `${posting.Judul}`} onHide={handleClose}>
                                        <div className="modal-wrapper">
                                            <Modal.Header closeButton>
                                            <Modal.Title></Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                <h3>{ posting.Judul }</h3>
                                                <p className="tanggal">{ posting.Timestamp }</p>
                                                <p>{ posting.Caption }</p>
                                            </Modal.Body>
                                        </div>
                                    </Modal>
                            </div>
                        ))
                    }
                    
                    
                </div>
            </div>

            
            
        </div>
    )
}

export default Catalog;