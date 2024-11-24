import searchIcon from "../../assets/images/search-loupe.png";
import style from "./error404Page.module.css";

export default function Error404Page() {
  return (
    <article className={style.backGround}>
      <section className={style.loadingSection}>
        <img
          className={style.loadingAnimation}
          src={searchIcon}
          alt="Loading animation"
        />
        <h1>
          Oops! It seems this page got lost in the game... No worries, it’s
          somewhere out there, but in the meantime, you can head back to the
          homepage and continue exploring our games. 🎲 If you're looking for
          something specific, our search bar might help you find what you're
          after. Happy exploring, and see you soon!
        </h1>
      </section>
    </article>
  );
}
