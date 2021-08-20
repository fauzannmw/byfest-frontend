import Hero from "../component/Homepage/Hero";
import Igtv from "../component/Homepage/Igtv";
import Description from "../component/Homepage/Description";
import Judges from "../component/Homepage/Judges";
import Kurator from "../component/Homepage/Kurator";
import Timeline from "../component/Homepage/Timeline";
import Faq from "../component/Homepage/Faq";
import Announcement from "../component/Homepage/Announcement";
import Sponsor from "../component/Homepage/Sponsor";
import GlobalNavbar from "../component/GlobalNavbar";
import GlobalFooter from "../component/GlobalFooter";
import "./Homepage.scss";
import { Helmet } from "react-helmet";

const Homepage = () => {
  return (
    <div className="homepage">
      {/* <GlobalNavbar active="homepage" /> */}
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Hero />
      <div className="content">
        <Description />
        <Judges />
        <Kurator />
        <Timeline />
        <Faq />
        <Announcement />
        <Sponsor />
      </div>
      {/* <GlobalFooter /> */}
    </div>
  );
};

export default Homepage;
