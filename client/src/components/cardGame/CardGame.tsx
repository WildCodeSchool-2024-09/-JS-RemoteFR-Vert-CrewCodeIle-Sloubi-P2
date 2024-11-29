import { NavLink } from "react-router-dom";
import style from "./cardGame.module.css";

function CardGame({
  gameId,
  name,
  rating,
  image,
  handleClickFavorite,
  handleClickFavoriteOff,
}: {
  gameId: number;
  name: string;
  rating: number;
  image: string;
  handleClickFavorite(id: string): void;
  handleClickFavoriteOff(id: string): void;
}) {
  // je récupère les favoris des jeux sur toutes les pages
  const listedFavorites = JSON.parse(
    localStorage.getItem("favorites") || "[]",
  ).map((a: string) => Number.parseInt(a));

  // le maximum de caractères que je souhaite pour l'affichage de name
  const NAME_MAX_LENGTH = 25;

  // permet de raccourcir le nom du jeu si son nom est trop long
  const nameSlice =
    name.length > NAME_MAX_LENGTH
      ? `${name.slice(0, NAME_MAX_LENGTH)}...`
      : name;
  return (
    <section className={style.card}>
      <article className={style.article}>
        <NavLink to={`/details/${gameId}`}>
          <figure className={style.imageBox}>
            <img
              src={image}
              alt={`Box cover of ${name}`}
              className={style.image}
            />
          </figure>
        </NavLink>
        <h2 className={style.title}>Name : {nameSlice}</h2>
        <h2 className={style.title}>Rating : {rating.toFixed(0)}/10</h2>
        {listedFavorites.includes(gameId) ? (
          <button
            type="button"
            className={style.button}
            onClick={() => {
              handleClickFavoriteOff(gameId.toString());
            }}
          >
            <svg
              className={
                listedFavorites.includes(gameId)
                  ? style.heartOn
                  : style.heartOff
              }
              viewBox="0 0 32 29.6"
            >
              <title>heart shape</title>
              <path
                d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
	c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"
              />
              {/* Coeur en vectoriel */}
            </svg>
          </button>
        ) : (
          <button
            type="button"
            className={style.button}
            onClick={() => {
              handleClickFavorite(gameId.toString());
            }}
          >
            <svg
              className={
                listedFavorites.includes(gameId)
                  ? style.heartOn
                  : style.heartOff
              }
              viewBox="0 0 32 29.6"
            >
              <title>heart shape</title>
              <path
                d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
	c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"
              />
              {/* Coeur en vectoriel */}
            </svg>
          </button>
        )}
      </article>
    </section>
  );
}

export default CardGame;
