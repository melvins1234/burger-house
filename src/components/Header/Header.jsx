import CompLogo from "../../images/comp_logo.png";
import deliverVector from "../../images/deliver_vector.png";

const Header = () => {
  return (
    <header>
      <section className="header__logo">
        <img src={CompLogo} alt="Burger House" />
      </section>
      <section className="header__nav-info">
        <section className="header__info">
          <span className="header__icon">
            <img src={deliverVector} alt="Deliver Vector" />
          </span>
          <span>Express Delivery +1 234 567 890</span>
        </section>
        <nav className="header__nav"></nav>
      </section>
    </header>
  );
};

export default Header;
