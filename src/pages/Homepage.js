import Hero from "../component/Hero";
import GlobalNavbar from "../component/GlobalNavbar";
import GlobalFooter from "../component/GlobalFooter";

const Homepage = () => {
  return (
    <div className="homepage">
      <GlobalNavbar active="homepage" />
      <Hero />
      <GlobalFooter />
    </div>
  );
};

export default Homepage;
