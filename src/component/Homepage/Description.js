import React from "react";
import descImage from "../../assets/image/description.jpg";
import "./Description.scss";

const Description = () => {
  return (
    <div className="description my-5">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 desc-image d-none d-sm-block">
            <img src={descImage} className="w-100 " alt="" />
          </div>
          <div className="col-md-9 desc-text">
            <h1>APA ITU BRAWIJAYA FILM FESTIVAL</h1>
            <p>
              Brawijaya Film Festival merupakan acara kegiatan eksibisi dan
              apresiasi film yang diproduksi oleh sineas tanah air. Rangkaian
              kegiatan acara mencakup pemutaran film panjang lawas, film pendek
              lokal, forum komunitas, dan talkshow. Brawijaya Film Festival yang
              digagas oleh Unit Kegiatan Mahasiswa Nol Derajat Universitas
              Brawijaya ini merupakan kegiatan festival film nasional.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
