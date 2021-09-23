import React from "react";
import Zoom from 'react-reveal';
import bgVideo from "../../assets/video/stock-video.mp4";
import logoUtama from "../../assets/image/byfest_kuning.png";
import "./Hero.scss";

const HeroNew = () => {
  return (
    <div>
      {window.innerWidth < 768 ? (
        <div className="hero-image">
          <Zoom>
            <div className="text-vid">
              <img className="logo-utama" src={logoUtama} alt="" />
              <div className="title">
                <h1 className="text-center">BRAWIJAYA FILM FESTIVAL</h1>
              </div>

              <p>29 - 31 Oktober 2021</p>
              {/* <a target="_blank" rel="noreferrer" href="https://forms.gle/pSu4boUPGVjWUR8S8">
                <button>Get Ticket</button>
              </a> */}
            </div>
          </Zoom>
        </div>
      ) : (
        <div className="hero-image">
          
          <div className="text-vid">
            <Zoom top>
            <img className="logo-utama" src={logoUtama} alt="" />
            <div className="title">
              <h1 className="text-center">BRAWIJAYA FILM FESTIVAL</h1>
            </div>

            <p>29 - 31 Oktober 2021</p>
            {/* <a target="_blank" rel="noreferrer" href="https://forms.gle/pSu4boUPGVjWUR8S8">
              <button>Get Ticket</button>
            </a> */}
            </Zoom>
          </div>
          
          <video
            autoPlay
            loop
            muted
            className="video-1"
            style={{
              position: "absolute",
              width: "100%",
              left: "50%",
              top: "60%",
              height: "100vh",
              objectFit: "cover",
              transform: "translate(-50%, -50%)",
              zIndex: "-1",
            }}
          >
            <source src={bgVideo} type="video/mp4" />
          </video>
        </div>
      )}
    </div>
  );
};

export default HeroNew;
