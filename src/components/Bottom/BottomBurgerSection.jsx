import OrderNowButton from "../atoms/Buttons/OrderNowButton/OrderNowButton";
const BottomBurgerSection = ({ image, title, text }) => {
  return (
    <section className="burger-section">
      <img src={image} alt="Burger" />
      <h3 className="burger-section__title">{title}</h3>
      <p className="burger-section__content">{text}</p>
      <OrderNowButton />
    </section>
  );
};

export default BottomBurgerSection;
