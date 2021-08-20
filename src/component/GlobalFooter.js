import "./GlobalFooter.scss";
import instagram from "../assets/image/logo_instagram.png";
import linkedin from "../assets/image/logo_linked.png";

const GlobalFooter = () => {
  return (
    <div className="global-footer">
      <div className="footer">
        <div>
          <img className="logo" src={instagram} alt="" />
          <img className="logo" src={linkedin} alt="" />
        </div>
        <h6>Made by Brawijaya Film Festival IT Developer Team, 2021</h6>
      </div>
    </div>
  );
};

export default GlobalFooter;
