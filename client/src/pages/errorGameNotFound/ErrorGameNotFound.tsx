import searchIcon from "../../assets/images/search-loupe.png";
import SmallHeader from "../../components/smallHeader/SmallHeader";
import style from "./errorGameNotFound.module.css";

export default function ErrorGameNotFound() {
  return (
    <div className={style.backGroundPage}>
      <header>
        <SmallHeader />
      </header>
      <article className={style.backGroundPage}>
        <section className={style.loadingSection}>
          <img
            className={style.loadingAnimation}
            src={searchIcon}
            alt="Loading animation"
          />
          <h1>
            Oops! It looks like the game you're searching for isn't available in
            our database. You can head back to the
            <a className={style.link} href="/">
              {" "}
              homepage{" "}
            </a>
            and continue exploring our games. 🎲
          </h1>
        </section>
      </article>
    </div>
  );
}
