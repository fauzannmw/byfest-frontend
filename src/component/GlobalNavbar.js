import { useState } from "react";
import { useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from 'react-router-dom';
import LogoNavbar from "../assets/image/byfest_hijau.png";
import "./GlobalNavbar.scss";

const GlobalNavbar = (props) => {
    const active = props.active;
    
    const [catalog, setCatalog] = useState(false);
    const [featured, setFeatured] = useState(false);

    useEffect(() => {
        console.log(active);
        if(active === '/catalog'){
            setCatalog(true);
            setFeatured(false);
        } else if (active === '/featured'){
            setFeatured(true);
            setCatalog(false);
        } else {
            setFeatured(false);
            setCatalog(false);
        }
    },[active])

    return(
        <div className="global-navbar">
            <div className="navbar-custom">
                <div className="container">
                <Navbar collapseOnSelect variant="light" expand="lg" sticky="top">
                    <Navbar.Brand href="#home" className="mr-auto">
                        {/* <div className="navbar-logo"></div> */}
                        <Link to="/">
                          <img
                              src={ LogoNavbar }
                              // width="70"
                              height="60"
                              className="d-inline-block align-top"
                              alt="Brawijaya Film Festival"
                          />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav>
                            <Link to="/catalog">
                                <button className={`navbar-button ${ catalog }`}>Catalog Event</button>     
                            </Link>
                            <Link to="/featured">
                                <button className={`navbar-button ${ featured }`}>Program</button>
                            </Link>
                            <a target="_blank" rel="noreferrer" href="https://forms.gle/pSu4boUPGVjWUR8S8">
                                <button className="navbar-button submission">Film Submission</button>
                            </a>
                            {/* <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                </div>
            </div>
        </div>
    )
}

export default GlobalNavbar;