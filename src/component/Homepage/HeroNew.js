import React from "react";
import bgImage from "../../assets/image/Jumbotron-Byfest.jpg";
import bgVideo from "../../assets/video/stock-video.mp4";
import logoUtama from "../../assets/image/byfest_kuning.png";
import "./HeroNew.scss";


const HeroNew = () => {
  return (
    <div className="hero">
      <video
        className="video"
        autoPlay
        muted
        loop
        height="800px"
      >
        <source src={bgVideo} type="video/mp4" />
      </video>
      <div className="row">
          <h1>Test</h1>
      </div>
    </div>
  );
};

export default HeroNew;
