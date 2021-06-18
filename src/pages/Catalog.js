import { useEffect, useState } from "react";
import { Tab, Tabs, Button, Navbar, Nav,Row, Col, Modal } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Sonnet from "../component/Sonnet";
import GlobalNavbar from "../component/GlobalNavbar";
import GlobalFooter from "../component/GlobalFooter";
import GambarPengumuman from "../assets/image/pengumuman.jpg";
import LogoNavbar from "../assets/image/byfest_hijau.png";
import "./Catalog.scss";
import post from '../api/post';
import axios from "axios";
import { setupCache } from "axios-cache-adapter";
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

    // const cache = setupCache({
    //     maxAge: 15 * 60 * 1000
    //   })
      
    //   // Create `axios` instance passing the newly created `cache.adapter`
    //   const api = axios.create({
    //     adapter: cache.adapter
    // })

    useEffect(async () => {
        // const resPost = await post.get(`14276`);
        await post.get(`sheet1`
        ).then(async (res) => {
            setPostingan(res.data);
            const length = await post.cache.length();
            console.log('Cache store length:', length);
        });
        // console.log(resPost);  
        // console.log(postingan);
        // parseString(resPost.data, function (err, result) {
        //     console.dir(result);
        // });
    },[])

    

    return(
        <div className="catalog">

            <GlobalNavbar active="catalog" />         

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
                            <div className="pengumuman" key={posting.Judul}>
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
                                    <Modal className="modal-pengumuman" show={show == `${posting.Judul}`} onHide={handleClose}>
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

            <GlobalFooter />

        </div>
    )
}

export default Catalog;