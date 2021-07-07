import Hero from "../component/Hero";
import HeroNew from "../component/HeroNew";
import Description from "../component/Description";
import Judges from "../component/Judges";
import Timeline from "../component/Timeline";
import Faq from "../component/Faq";
import Announcement from "../component/Announcement";
import Sponsor from "../component/Sponsor";
import GlobalNavbar from "../component/GlobalNavbar";
import GlobalFooter from "../component/GlobalFooter";

const Homepage = () => {
  return (
    <div className="homepage">
      <GlobalNavbar active="homepage" />
      {/* <Hero /> */}
      <HeroNew />
      <Description />
      <Judges />
      <Timeline />
      <Faq />
      <Announcement />
      <Sponsor />
      <GlobalFooter />
    </div>
  );
};

export default Homepage;
