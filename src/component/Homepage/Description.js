import React from "react";
import { Slide, Zoom } from 'react-reveal';
import descImage from "../../assets/image/description.jpg";
import "./Description.scss";

const Description = () => {
  return (
    <div className="description my-5">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 desc-image d-none d-sm-block">
            <Zoom>
              <img src={descImage} className="w-100 " alt="" />
            </Zoom>
          </div>
          <div className="col-md-9 desc-text">
            <Slide right>
              <h1>APA ITU BRAWIJAYA FILM FESTIVAL</h1>
              <p>
                Brawijaya Film Festival adalah acara kegiatan eksibisi dan
                apresiasi film yang diproduksi oleh sineas tanah air. Rangkaian
                kegiatan acara mencakup pemutaran film panjang lawas, film pendek
                lokal, forum komunitas, dan talkshow. Brawijaya Film Festival yang
                digagas oleh Unit Kegiatan Mahasiswa Nol Derajat Universitas
                Brawijaya ini merupakan kegiatan festival film nasional.
              </p>
              <p>
                Brawijaya Film Festival atau BYFEST merupakan festival film
                tahunan yang digagas oleh Unit Kegiatan Mahasiswa (UKM) Nol
                Derajat Film Universitas Brawijaya. Acara kegiatan eksibisi ini
                dilakukan untuk mengapresiasi film yang diproduksi oleh sineas
                tanah air. Rangkaian acara Brawijaya Film Festival mencakup
                pemutaran film panjang lawas, program kompetisi film pendek, forum
                komunitas, dan talkshow. Selain itu, BYFEST 2021 juga mengadakan
                Open Submission Film Pendek. Program kompetisi film pendek
                Brawijaya Film Festival diadakan untuk memberi wadah bagi para
                pembuat film lokal. Adanya program kompetisi ini diharapkan dapat
                memberi semangat dan apresiasi bagi para kreator film agar terus
                berkarya dan berkontribusi untuk perfilman Indonesia.
              </p>
            </Slide>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
