import { useState } from "react";
import { NavLink, useLoaderData, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo-boarder-line-big-transparent.png";
import searchIcon from "../../assets/images/search-icon.png";
import type { boardGameListType } from "../../assets/lib/definition";
import style from "./navbar.module.css";

function Navbar() {
  // loader
  const boardGames: boardGameListType[] =
    useLoaderData() as boardGameListType[];

  // permet de naviger d'une page à l'autre
  const navigate = useNavigate();

  // gestion de l'état
  const [value, setValue] = useState("");

  // permet d'afficher la touche entrée par l'utilisateur et remplacer les caractères interdits
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value.replace(/[^\.a-zA-Z0-9-:&()']/g, ""));
  };

  // permet au click de déplacer la suggestion dans la champ de saisis
  const onSearch = (searchTerm: string) => {
    setValue(searchTerm);
  };

  // permet de valider la recherche
  const onSubmitSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(value);

    // transformation de l'entrée de l'utilisateur
    const boardGameSearchCase = value.toLowerCase().replace(/\s/g, "");

    // comparaison de l'entrée de l'utilisateur avec la base de donnée
    const foundBoardGame = boardGames.find(
      (g) => g.name.toLowerCase().replace(/\s/g, "") === boardGameSearchCase,
    );

    // redirection
    if (foundBoardGame) {
      setValue("");
      return navigate(`details/${foundBoardGame.gameId}`);
    }
    return navigate("/notfound");
  };

  // style des suggestions
  const dropDownStyle = value !== "" ? style.dropDown : style.dropDownNone;

  // filtre l'api afin de comparer l'entrée utilisateur
  const boardGamesFilter = boardGames.filter((g) => {
    const searchTerm = value.toLowerCase().replace(/\s/g, "");
    const gameName = g.name.toLowerCase().replace(/\s/g, "");

    // renvoie la comparaison si il y a une recherche, si un jeux est selectionné la suggestion disparait
    return (
      searchTerm && gameName.startsWith(searchTerm) && gameName !== searchTerm
    );
  });
  return (
    <nav className={style.navbar}>
      <NavLink to={"/"}>
        <img
          src={logo}
          alt="Logo du site Boarder Line"
          className={style.imgLogo}
        />
      </NavLink>
      <div className={style.rightNavbar}>
        <form className={style.formSearchBar} onSubmit={onSubmitSearch}>
          <div className={style.searchBar}>
            <input
              value={value}
              onChange={onChange}
              type="search"
              placeholder="Search a game"
              className={style.inputSearch}
            />
            <button type="submit" className={style.inputButton}>
              <img src={searchIcon} alt="search button icon" width="20px" />
            </button>
          </div>
          <section className={dropDownStyle}>
            {value.length > 40 && (
              <p className={style.error}>Too much characters.</p>
            )}
            {boardGamesFilter.map((g, i) => (
              <button
                type="button"
                key={g.gameId}
                className={
                  i < boardGamesFilter.length - 1
                    ? style.dropDownRow
                    : style.dropDownRowLast
                }
                onClick={() => onSearch(g.name)}
              >
                {g.name}
              </button>
            ))}
          </section>
        </form>
        <NavLink to={"/library"}>
          <button type="button" className={style.buttons}>
            GAMES
          </button>
        </NavLink>
        <NavLink to={"/favorites"}>
          <button type="button" className={style.buttons}>
            FAVORITES
          </button>
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
