import Hero from "../component/Homepage/Hero";
import Igtv from "../component/Homepage/Igtv";
import Description from "../component/Homepage/Description";
import Judges from "../component/Homepage/Judges";
import Timeline from "../component/Homepage/Timeline";
import Faq from "../component/Homepage/Faq";
import Announcement from "../component/Homepage/Announcement";
import Sponsor from "../component/Homepage/Sponsor";
import GlobalNavbar from "../component/GlobalNavbar";
import GlobalFooter from "../component/GlobalFooter";
import "./Homepage.scss";

const Homepage = () => {
  return (
    <div className="homepage">
      {/* <GlobalNavbar active="homepage" /> */}
      <Hero />
      <div className="content">
        <Description />
        <Judges />
        <Timeline />
        <Faq />
        <Announcement />
        <Sponsor />
      </div>
      <GlobalFooter />
    </div>
  );
};

export default Homepage;
