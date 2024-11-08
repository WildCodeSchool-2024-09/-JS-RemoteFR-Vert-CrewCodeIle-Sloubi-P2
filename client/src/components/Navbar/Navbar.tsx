import profil from "../../assets/images/login-icon.png";
import logo from "../../assets/images/logo-boarder-line-big-transparent.png";
import loupe from "../../assets/images/search-loupe.png";
import style from "./navbar.module.css";

function Navbar() {
  return (
    <nav className={style.navbar}>
      <img src={logo} alt="Logo Boarder Line" className={style.imgLogo} />
      <div className={style.rightNavbar}>
        <form className={style.searchBar}>
          <input type="search" className={style.inputSearch} />
          <button type="submit" className={style.inputButton}>
            <img src={loupe} alt="loupe de recherche" width="20px" />
          </button>
        </form>
        <a href="https://bgg-json.azurewebsites.net/collection/edwalter">
          <button type="button" className={style.buttonGames}>
            GAMES
          </button>
        </a>
        <a href="https://bgg-json.azurewebsites.net/collection/edwalter">
          <img
            src={profil}
            alt="Bouton d'accès au profil"
            className={style.imgProfil}
          />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
