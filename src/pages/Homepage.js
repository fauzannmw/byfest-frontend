import Hero from "../component/Hero";
import Igtv from "../component/Igtv";
import Description from "../component/Description";
import Judges from "../component/Judges";
import Timeline from "../component/Timeline";
import Faq from "../component/Faq";
import Announcement from "../component/Announcement";
import Sponsor from "../component/Sponsor";
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
