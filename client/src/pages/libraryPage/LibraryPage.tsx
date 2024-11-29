import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import type { boardGameListType } from "../../assets/lib/definition";
import CardGame from "../../components/cardGame/CardGame";
import FilterType from "../../components/filterType/FilterType";
import SmallHeader from "../../components/smallHeader/SmallHeader";
import style from "./libraryPage.module.css";

// page library pour lister les jeux et les filtrer

export default function libraryPage() {
  const fullGame: boardGameListType[] = useLoaderData() as boardGameListType[];
  const [filterType, setFilterType] = useState("");
  const categories: string[] = [...new Set(fullGame.map((f) => f.type))]
    .join(",")
    .split(",")
    .splice(1);
  const onlyOneCategories: string[] = [...new Set(categories.map((s) => s))];

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

  return (
    <>
      <header>
        <SmallHeader />
      </header>
      <section className={style.backgroundPage}>
        <div>
          <FilterType
            setFilterType={setFilterType}
            category={onlyOneCategories}
          />
        </div>
        <div className={style.cards}>
          {filterType
            ? fullGame
                .filter((f) => f.type?.includes(filterType))
                .map((f) => (
                  <article key={f.gameId} className={style.card}>
                    <CardGame
                      key={f.gameId}
                      gameId={f.gameId}
                      name={f.name}
                      rating={f.averageRating}
                      image={f.image}
                      handleClickFavorite={handleClickFavorite}
                      handleClickFavoriteOff={handleClickFavoriteOff}
                    />
                  </article>
                ))
            : fullGame.map((f) => (
                <article key={f.gameId} className={style.card}>
                  <CardGame
                    key={f.gameId}
                    gameId={f.gameId}
                    name={f.name}
                    rating={f.averageRating}
                    image={f.image}
                    handleClickFavorite={handleClickFavorite}
                    handleClickFavoriteOff={handleClickFavoriteOff}
                  />
                </article>
              ))}
        </div>
      </section>
    </>
  );
}
