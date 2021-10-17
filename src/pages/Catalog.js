import { useEffect, useState } from "react";
import { Tab, Tabs,Row, Col, Modal, Spinner } from "react-bootstrap";
import Fade from 'react-reveal';
import Sonnet from "../component/Sonnet";
import "./Catalog.scss";
import post from '../api/post';
import CloseButton from '@material-ui/icons/Close'
import 'moment/locale/id';
import moment from "moment";
import { Helmet } from "react-helmet";
// var parseString = require('xml2js').parseString;

const Catalog = () => {
    const catalogs = [
        {
            key: "Roadshow",
            header: "Roadshow",
            content: "Salah satu rangkaian pra-acara Brawijaya Film Festival untuk mengenalkan BYFEST dengan melakukan kunjungan secara virtual ke komunitas-komunitas film di Indonesia. Roadshow dilakukan selama 2 bulan, agar dapat menjangkau teman-teman komunitas film di Indonesia."
        },
        {
            key: "Screening",
            header: "Screening",
            content: "Rangkaian acara pemutaran Brawijaya Film Festival, terdiri dari dua program film, yaitu Program Film Pendek dan Program Film Panjang.\nFilm-film yang masuk lewat Open Submission akan dikurasi dan dinilai oleh para juri akan masuk ke dalam Program Film Pendek kami.\nSementara itu, Program Film Panjang merupakan pemutaran film panjang lawas untuk mengenang dan mengapresiasi sejarah film di Industri film Indonesia, yang menjadikan ciri khas Brawijaya Film Festival."
        },
        {
            key: "Webinar",
            header: "Webinar",
            content: "Salah satu acara non pemutaran Brawijaya Film Festival untuk diskusi bersama pemateri yang merupakan pelaku dalam perfilman Indonesia."
        },
        {
            key: "Forum Komunitas",
            header: "Forum Komunitas",
            content: "Kegiatan diskusi bersama komunitas film Se-Jawa Timur."
        },
        {
            key: "Awarding",
            header: "Awarding",
            content: "Puncak acara sekaligus penutup dari rangkaian kegiatan Brawijaya Film Festival dengan memberikan apresiasi untuk filmmaker yang berpartisipasi."
        }
    ]

    const [postingan, setPostingan] = useState([]);
    // const [spinner, setSpinner] = useState(false)
    const fotoPosting = [];
    const spinnerFotoPosting = [];
    const [show, setShow] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = (id) => setShow(id);

    useEffect(async () => {
        await post.get(`pengunguman`
        ).then(async (res) => {
            setPostingan(res.data);
            moment.locale('id');
            const length = await post.cache.length();
            console.log('Cache store length:', length);
        });
    },[])

    const handleSubstringFoto = (e, idx) => { 
        const tanggal = "https://drive.google.com/uc?export=view&id=" + e.substring(33,80);
        fotoPosting[idx] = tanggal;
        spinnerFotoPosting[idx] = true;
    };

    return(
        <div className="catalog">

            {/* <GlobalNavbar active="catalog" />          */}
            <Helmet>
                <title>Catalog Event</title>
            </Helmet>

            <div className="contents">
                <div className="container">
                    <h1 className="catalog-h1">CATALOG EVENT</h1>
                    <Fade>
                        <Tabs defaultActiveKey="Roadshow" transition={false} id="noanim-tab-example">
                            <Tab className="nav-link-kiri" eventKey={ catalogs[0].key } title={ catalogs[0].key }>
                                <Sonnet header={ catalogs[0].header } content={ catalogs[0].content } />
                            </Tab>
                            <Tab eventKey={ catalogs[1].key } title={ catalogs[1].key }>
                                <Sonnet header={ catalogs[1].header } content={ catalogs[1].content } />
                            </Tab>
                            <Tab eventKey={ catalogs[2].key } title={ catalogs[2].key }>
                                <Sonnet header={ catalogs[2].header } content={ catalogs[2].content } />
                            </Tab>
                            <Tab eventKey={ catalogs[3].key } title={ catalogs[3].key }>
                                <Sonnet header={ catalogs[3].header } content={ catalogs[3].content } />
                            </Tab>
                            <Tab className="nav-link-kanan" eventKey={ catalogs[4].key } title={ catalogs[4].key }>
                                <Sonnet header={ catalogs[4].header } content={ catalogs[4].content } />
                            </Tab>
                        </Tabs>
                    </Fade>
                    
                    <h1 className="pengumuman-h1">PENGUMUMAN</h1>
                    {postingan.length ?
                        postingan.slice(0).reverse().map((posting, idx) => (
                            <Fade bottom>
                            <div className="pengumuman" key={posting.Timestamp}>
                                { handleSubstringFoto(posting.Foto, idx) }
                                <div className="card-pengumuman">
                                    
                                    <Row>
                                        <Col xs={12} md={5} lg={3} className="kiri">
                                            <img 
                                                src={ fotoPosting[idx] }
                                                className="preview-image d-inline-block align-top"
                                                alt="preview" 
                                            />
                                        </Col>
                                        <Col xs={12} md={7} lg={9} className="kanan">
                                            <div className="kanan-inner">
                                                <div className="top">
                                                    <h3>{ posting.Judul }</h3>
                                                    <p className="tanggal">{ moment(posting.Timestamp).format('dddd' + ", " + 'LL') }</p>
                                                    <p className="overview">{ posting.Caption.substring(0, 330) + "..." }</p>
                                                </div>
                                                <div className="bottom">
                                                    <button className="button-pengumuman" onClick={ (e) => handleShow(posting.Timestamp)}>
                                                        View More
                                                    </button>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                    <Modal size="md" centered className="modal-pengumuman" show={show === `${posting.Timestamp}`} onHide={handleClose}>
                                        <div className="modal-wrapper">
                                            {/* <Modal.Header style={{backgroundImage: `url(${ fotoPosting[idx] })`}}> */}
                                            <Modal.Header>
                                                {/* <Modal.Title></Modal.Title> */}
                                                    <div className="modal-preview-image-wrapper">
                                                        <img 
                                                            src={ fotoPosting[idx] }
                                                            className="modal-preview-image d-inline-block align-top"
                                                            alt="preview"
                                                        />
                                                        <div className="tombol-tutup">
                                                            <a onClick={handleClose}>
                                                                <CloseButton />
                                                            </a>
                                                        </div>
                                                    </div>
                                                
                                            </Modal.Header>
                                            <Modal.Body>
                                                <h3>{ posting.Judul }</h3>
                                                <p className="tanggal">{ moment(posting.Timestamp).format('dddd' + ", " + 'LL') }</p>
                                                <p>{ posting.Caption }</p>
                                            </Modal.Body>
                                        </div>
                                    </Modal>
                            </div>
                            </Fade>
                        )) : 
                        <div className="spinner-wrapper">
                            <Spinner animation="border" className="spinner" size="md" />
                        </div> 
                    }              
                </div>
            </div>   

            {/* <GlobalFooter /> */}

        </div>
    )
}

export default Catalog;