import burgerLeft from "../../images/burger.jpg";
import burgerRightTop from "../../images/burger_right_top.jpg";
import burgerRightBottom from "../../images/burger_right_bottom.jpg";

import "./middle.scss";

const Middle = () => {
  return (
    <div className="middle">
      <div className="wrapper">
        <section className="middle__grid-container">
          <div className="middle__boxes middle__boxes--left">
            <h3 className="middle__content">
              Try it today <span>most popular burger</span>
            </h3>
            <img src={burgerLeft} alt="Burger" />
          </div>
          <div className="middle__boxes middle__boxes--top">
            <h3 className="middle__content">
              Try it today <span>more fun</span> <span>more taste</span>
            </h3>
            <img src={burgerRightTop} alt="Burger" />
          </div>
          <div className="middle__boxes middle__boxes--bottom">
            <h3 className="middle__content">
              Try it today <span>fresh & chili</span>
            </h3>
            <img src={burgerRightBottom} alt="Burger" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Middle;
