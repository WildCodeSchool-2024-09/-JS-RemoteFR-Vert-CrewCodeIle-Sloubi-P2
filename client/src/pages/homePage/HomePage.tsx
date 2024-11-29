import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import type { boardGameListType } from "../../assets/lib/definition";
import CardSlider from "../../components/cardSlider/CardSlider";
import HeroHeader from "../../components/heroHeader/HeroHeader";
import style from "./homePage.module.css";

export default function HomePage() {
  // loader
  const boardGames: boardGameListType[] =
    useLoaderData() as boardGameListType[];

  // logique du slider: top jeu

  const boardGamesTop: boardGameListType[] | null = boardGames
    ? boardGames.filter((games) => games.averageRating > 8)
    : [];

  // liste des découvertes de l'équipe

  const FAVOURITES_GAMES = [
    "7 Wonders",
    "Carcassonne",
    "Dixit",
    "Jamaica",
    "Myrmes",
    "Pandemic",
    "Scythe",
  ];

  // j'ajoute un nouveau favoris au click
  const [favorites, setFavorites] = useState<string[] | []>(
    JSON.parse(localStorage.getItem("favorites") || "[]"),
  );
  const handleClickFavorite = (id: string) => {
    const newFavorite = [...favorites, id];
    setFavorites(newFavorite);
    localStorage.setItem("favorites", JSON.stringify(newFavorite));
  };

  // je retire le jeu des favoris
  const handleClickFavoriteOff = (id: string) => {
    const newFavorite = favorites.filter((p) => p !== id);
    setFavorites(newFavorite);
    localStorage.setItem("favorites", JSON.stringify(newFavorite));
  };

  // logique du slider des découvertes:

  const boardGamesDiscovery: boardGameListType[] | null = boardGames
    ? boardGames
        .map((g) => (FAVOURITES_GAMES.includes(g.name) ? g : false))
        .filter((g) => g !== false)
    : [];

  return (
    <>
      <header>
        <HeroHeader />
      </header>
      <section className={style.backgroundPage}>
        <h1 className={style.titleSlide}>Discoveries</h1>
        {boardGames && (
          <CardSlider
            boardGamesList={boardGamesDiscovery}
            handleClickFavorite={handleClickFavorite}
            handleClickFavoriteOff={handleClickFavoriteOff}
          />
        )}
        <h1 className={style.titleSlide}>Top Games</h1>
        {boardGames && (
          <CardSlider
            boardGamesList={boardGamesTop}
            handleClickFavorite={handleClickFavorite}
            handleClickFavoriteOff={handleClickFavoriteOff}
          />
        )}
      </section>
    </>
  );
}
