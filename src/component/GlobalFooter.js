import "./GlobalFooter.scss";
import instagram from "../assets/image/logo_instagram.png";
import linkedin from "../assets/image/logo_linked.png";

const GlobalFooter = () => {
  return (
    <div className="global-footer">
      <div className="footer">
        <div>
          <a
            target="blank"
            href="https://www.instagram.com/brawijayafilmfestival/"
          >
            <img className="logo" src={instagram} alt="" />
          </a>
          <a
            target="blank"
            href="https://www.linkedin.com/in/brawijaya-film-festival-8b668a215"
          >
            <img className="logo" src={linkedin} alt="" />
          </a>
        </div>
        <h6>Made by Brawijaya Film Festival IT Developer Team, 2021</h6>
      </div>
    </div>
  );
};

export default GlobalFooter;
