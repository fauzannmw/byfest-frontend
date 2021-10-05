import React from "react";
import Youtube from "../component/Youtube";
import filmImg from "../assets/image/film.png";
import "./Streaming.scss";

const Streaming = () => {
  return (
    <div className="container">
      <Youtube />
      <div className="row mb-5">
        <div className="col-2" style={{ padding: "0" }}>
          <img src={filmImg} alt="" />
        </div>
        <div className="col-10">
          <h1>Judul Film</h1>
          <h6>Direktor, Tahun</h6>
          <h6>Durasi</h6>
          <h6>Genre</h6>
        </div>
      </div>
      <div className="row mb-5">
        <h4>Sinopsis</h4>
        <h6>
          Be sure to test any solution across different Reader preferences. A
          site visitor may have their browser set to open the PDF in
          Reader/Acrobat as opposed to the browser, e.g., by disabling the
          Acrobat plugin in Firefox..
        </h6>
        <h6>
          I can't be sure of my results, because I have two different Acrobat
          plugins that Firefox recognizes due to my having different versions of
          Adobe Acrobat and Adobe Reader, but it does appear that you at least
          need to test what happens if a website visitor has their browser set
          to not open the PDF in the browser. It could be quite annoying when
          they look at what appears to be an otherwise usable web page and their
          browser is nagging them to open a PDF file that they think they didn't
          request. In some cases, the PDF file spontaneously opened in Adobe
          Reader, not the browser, and in other cases the browser threw up a
          dialog saying the file didn't exist.
        </h6>
      </div>
    </div>
  );
};

export default Streaming;
