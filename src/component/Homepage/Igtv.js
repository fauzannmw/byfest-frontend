import React from "react";
import InstagramEmbed from "react-instagram-embed";

const Igtv = () => {
  return (
    <InstagramEmbed
      url="https://instagr.am/p/CRHEm-epWe0/"
      // clientAccessToken="123|456"
      maxWidth={320}
      hideCaption={false}
      containerTagName="div"
      protocol=""
      injectScript
      onLoading={() => {}}
      onSuccess={() => {}}
      onAfterRender={() => {}}
      onFailure={() => {}}
    />
  );
};

export default Igtv;
