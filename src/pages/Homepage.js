import Hero from "../component/Hero";
import Description from "../component/Description";
import Timeline from "../component/Timeline";
import Sponsor from "../component/Sponsor";
import Announcement from "../component/Announcement";
import GlobalNavbar from "../component/GlobalNavbar";
import GlobalFooter from "../component/GlobalFooter";

const Homepage = () => {
  return (
    <div className="homepage">
      <GlobalNavbar active="homepage" />
      <Hero />
      <Description />
      <Timeline />
      <Announcement />
      <Sponsor />
      <GlobalFooter />
    </div>
  );
};

export default Homepage;
