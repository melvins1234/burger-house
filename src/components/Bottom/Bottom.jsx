import BottomBurgerSection from "./BottomBurgerSection";

import bottom_burger1 from "../../images/bottom_burger-1.png";
import bottom_burger2 from "../../images/bottom_burger-2.png";

import "./bottom.scss";

const Bottom = () => {
  return (
    <section className="bottom">
      <div className="wrapper">
        <section className="bottom__header">
          <a className="bottom__button" href="#">
            Always tasty burger
          </a>
          <h2 className="bottom__header--text">Choose & Enjoy</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel magnam
            eum molestias impedit alias labore autem ullam illum deserunt
            aperiam? Vero at maxime, rerum accusamus aliquid exercitationem est
            sunt esse?
          </p>
        </section>
      </div>
      <section className="bottom__body">
        <BottomBurgerSection
          image={bottom_burger1}
          title="Lorem ipsum dolor"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
        />
        <BottomBurgerSection
          image={bottom_burger2}
          title="Lorem ipsum dolor"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
        />
        <BottomBurgerSection
          image={bottom_burger1}
          title="Lorem ipsum dolor"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
        />
      </section>
    </section>
  );
};

export default Bottom;
