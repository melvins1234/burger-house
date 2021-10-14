import Header from "../Header/Header";
import "./banner.scss";

const Banner = () => {
  return (
    <div className="banner">
      <div className="wrapper">
        <div className="banner__header">
          <Header />
        </div>
      </div>
    </div>
  );
};

export default Banner;
