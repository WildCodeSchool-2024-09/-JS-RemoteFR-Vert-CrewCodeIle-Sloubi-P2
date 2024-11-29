import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import type { boardGameListType } from "../../assets/lib/definition";
import CardGame from "../../components/cardGame/CardGame";
import SmallHeader from "../../components/smallHeader/SmallHeader";
import style from "./favoritesPage.module.css";

export default function FavoritesPage() {
  const fullGame: boardGameListType[] = useLoaderData() as boardGameListType[];

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

  // je récupère les favoris sur toutes les pages
  const listedFavorites = favorites.map((a: string) => Number.parseInt(a));

  // je filtre les jeux de l'api pour garder que les favoris
  const favoritesGames = fullGame.filter((game) =>
    listedFavorites.includes(game.gameId),
  );

  // button reset
  const handleResetFavorites = () => {
    localStorage.removeItem("favorites");
    setFavorites([]);
  };

  // const function heartColor ()
  return (
    <>
      <header>
        <SmallHeader />
      </header>
      <section className={style.backgroundPage}>
        <h2 className={style.title}>My Favorites Games</h2>
        <div className={style.cards}>
          {favoritesGames.map((a) => (
            <article key={a.gameId} className={style.card}>
              <CardGame
                key={a.gameId}
                gameId={a.gameId}
                name={a.name}
                rating={a.averageRating}
                image={a.image}
                handleClickFavorite={handleClickFavorite}
                handleClickFavoriteOff={handleClickFavoriteOff}
              />
            </article>
          ))}
        </div>
        <div className={style.divButton}>
          <button
            type="submit"
            onClick={handleResetFavorites}
            className={style.button}
          >
            Reset favorites
          </button>
        </div>
      </section>
    </>
  );
}
