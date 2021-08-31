import { useEffect, useState } from "react";
import { Tab, Tabs,Row, Col, Modal, Spinner } from "react-bootstrap";
import Sonnet from "../component/Sonnet";
import "./Catalog.scss";
import post from '../api/post';
import CloseButton from '@material-ui/icons/Close'
import 'moment/locale/id';
import moment from "moment";
import { Helmet } from "react-helmet";
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
            content: "Be sure to test any solution across different Reader preferences. A site visitor may have their browser set to open the PDF in Reader/Acrobat as opposed to the browser, e.g., by disabling the Acrobat plugin in Firefox.\n\n I can't be sure of my results, because I have two different Acrobat plugins that Firefox recognizes due to my having different versions of Adobe Acrobat and Adobe Reader, but it does appear that you at least need to test what happens if a website visitor has their browser set to not open the PDF in the browser. It could be quite annoying when they look at what appears to be an otherwise usable web page and their browser is nagging them to open a PDF file that they think they didnt request. In some cases, the PDF file spontaneously opened in Adobe Reader, not the browser, and in other cases the browser threw up a dialog saying the file didnt exist."
        },
        {
            key: "Awarding",
            header: "Byfest Awarding",
            content: "Be sure to test any solution across different Reader preferences. A site visitor may have their browser set to open the PDF in Reader/Acrobat as opposed to the browser, e.g., by disabling the Acrobat plugin in Firefox."
        }
    ]

    const [postingan, setPostingan] = useState([]);
    const [spinner, setSpinner] = useState(false)
    // const [spinnerFoto, setSpinnerFoto] = useState({ id: 0, value: ''});
    // const [fotoPosting, setFotoPosting] = useState([]);
    const fotoPosting = [];
    const spinnerFotoPosting = [];
    const [show, setShow] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = (id) => setShow(id);

    // const fetchPostingan = async () => {
    //     const res = await post.get(`sheet1`);
    //     setPostingan(res.data);
    //     // for(let i = 0; i < postingan.length; i++){
    //     //     // console.log(postingan[i].Foto);
    //     //     // fotoPosting[i] = "https://drive.google.com/uc?export=view&id=" + postingan[i].Foto.substring(33,80);
    //     //     // spinnerFotoPosting[i] = true;
    //     //     handleSubstringFoto(res.data[i].Foto, i);
    //     //     console.log(res.data[i].Foto + " " + i);
    //     // }
    // };

    // useEffect(() => {
    //     fetchPostingan();
    // },[]);

    // useEffect(async () => {
    //     await post.get(`sheet1`
    //     ).then(async (res) => {
    //         setPostingan(res.data);
    //         for(let i = 0; i < postingan.length; i++){
    //             console.log(postingan[i].Foto);
    //             fotoPosting[i] = "https://drive.google.com/uc?export=view&id=" + postingan[i].Foto.substring(33,80);
    //             spinnerFotoPosting[i] = true;
    //         }
    //         const length = await post.cache.length();
    //         console.log('Cache store length:', length);
    //     });
    // },[])

    useEffect(async () => {
        // const resPost = await post.get(`14276`);
        // await post.get(`sheet1`
        await post.get(`exec`
        ).then(async (res) => {
            // for(let i = 0; i < res.data.length; i++){  
            //     // // fotoPosting[i] = "https://drive.google.com/uc?export=view&id=" + res.data[i].Foto.substring(33,80);
            //     // const tanggal = "https://drive.google.com/uc?export=view&id=" + res.data[i].Foto.substring(33,80);
            //     // // if(tanggal){
            //     // fotoPosting[i] = tanggal;
            //     handleSubstringFoto(res.data[i].Foto, i);
            //     // console.log(fotoPosting[i]);

            // }
            setPostingan(res.data);
            moment.locale('id');
            // console.log(res.data);
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
                    <Tabs defaultActiveKey="Roadshow" transition={false} id="noanim-tab-example">
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
                    
                    <h1 className="pengumuman-h1">PENGUMUMAN</h1>
                    {postingan.length ?
                        postingan.slice(0).reverse().map((posting, idx) => (
                            <div className="pengumuman" key={posting.Timestamp}>
                                { handleSubstringFoto(posting.Foto, idx) }
                                <div className="card-pengumuman">
                                    
                                    <Row>
                                        <Col xs={12} md={5} lg={3} className="kiri">
                                            {/* { spinnerFotoPosting[idx] == true ?
                                            <img 
                                                src={ fotoPosting[idx] }
                                                className="preview-image d-inline-block align-top"
                                                alt="preview" />
                                            :   
                                            <div className="spinner-wrapper">
                                                <Spinner animation="border" className="spinner" size="md" />
                                            </div> 
                                            } */}
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
                                                    <p>{ posting.Caption.substring(0, 343) + "..." }</p>
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
                                    <Modal className="modal-pengumuman" show={show == `${posting.Timestamp}`} onHide={handleClose}>
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