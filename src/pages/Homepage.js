import Hero from "../component/Hero";
import Announcement from "../component/Announcement";
import GlobalNavbar from "../component/GlobalNavbar";
import GlobalFooter from "../component/GlobalFooter";

const Homepage = () => {
  return (
    <div className="homepage">
      <GlobalNavbar active="homepage" />
      <Hero />
      <Announcement />
      <GlobalFooter />
    </div>
  );
};

export default Homepage;
