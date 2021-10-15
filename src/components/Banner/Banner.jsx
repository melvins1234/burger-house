import Header from "../Header/Header";
import BannerTextContent from "./BannerTextContent";
import BannerBurgerImage from "../../images/banner-burger.png";
import "./banner.scss";

const Banner = () => {
  return (
    <div className="banner">
      <div className="wrapper">
        <Header />
        <section className="banner__content">
          <BannerTextContent />
          <section className="banner__content--image">
            <img
              className="banner__image"
              src={BannerBurgerImage}
              alt="Burger Fries Coke"
            />
            <div className="banner__content-price--red-circle">
              <p>
                <span>$5</span>
                .49 <strong>ONLY</strong>
              </p>
            </div>
          </section>
        </section>
      </div>
    </div>
  );
};

export default Banner;
