import React from "react";
import { Parallax } from "react-parallax";
import bgImage from "../../assets/image/Jumbotron-Byfest.jpg";
import logoUtama from "../../assets/image/byfest_kuning.png";
import "./Hero.scss";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <Parallax bgImage={bgImage} strength={800}>
      <div className="hero">
        <img src={logoUtama} alt="" />
        <h1>BRAWIJAYA FILM FESTIVAL</h1>
        <p>19 - 20 Oktober 2021</p>
        <a target="_blank" href="https://forms.gle/pSu4boUPGVjWUR8S8">
          <button>Get Ticket</button>
        </a>
      </div>
    </Parallax>
  );
};

export default Hero;
