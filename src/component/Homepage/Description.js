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
              Be sure to test any solution across different Reader preferences.
              A site visitor may have their browser set to open the PDF in
              Reader/Acrobat as opposed to the browser, e.g., by disabling the
              Acrobat plugin in Firefox..
            </p>
            <p>
              I can't be sure of my results, because I have two different
              Acrobat plugins that Firefox recognizes due to my having different
              versions of Adobe Acrobat and Adobe Reader, but it does appear
              that you at least need to test what happens if a website visitor
              has their browser set to not open the PDF in the browser. It could
              be quite annoying when they look at what appears to be an
              otherwise usable web page and their browser is nagging them to
              open a PDF file that they think they didn't request. In some
              cases, the PDF file spontaneously opened in Adobe Reader, not the
              browser, and in other cases the browser threw up a dialog saying
              the file didn't exist.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
