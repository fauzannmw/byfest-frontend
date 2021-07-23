import { useState } from "react";
import { useEffect } from "react";
import {
  Tab,
  Tabs,
  Button,
  Navbar,
  Nav,
  Row,
  Col,
  Modal,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import LogoNavbar from "../assets/image/byfest_hijau.png";
import "./GlobalNavbar.scss";

const GlobalNavbar = (props) => {
  const active = props.active;

  const [catalog, setCatalog] = useState(false);
  const [featured, setFeatured] = useState(false);

  useEffect(async () => {
    if (active == "catalog") {
      setCatalog(true);
    } else {
      setFeatured(true);
    }
  }, []);

  return (
    <div className="global-navbar">
      <div className="sidebar"></div>
      <div className="navbar-custom">
        <div className="container-fluid">
          <Navbar variant="dark">
            <Navbar.Brand className="mr-auto">
              {/* <div className="navbar-logo"></div> */}
              <Link to="/">
                <img
                  src={LogoNavbar}
                  className="d-inline-block align-top w-75"
                  alt="Brawijaya Film Festival"
                />
              </Link>
            </Navbar.Brand>
            <Nav>
              <Link to="/catalog">
                <button className={`navbar-button ${catalog}`}>
                  Catalog Event
                </button>
              </Link>
              <Link to="/featured">
                <button className={`navbar-button ${featured}`}>
                  Program
                </button>
              </Link>
              <a target="_blank" href="https://forms.gle/pSu4boUPGVjWUR8S8">
                <button className="navbar-button submission">
                  Film Submission
                </button>
              </a>
              {/* <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link> */}
            </Nav>
          </Navbar>
        </div>
      </div>
    </div>
  );
};

export default GlobalNavbar;
