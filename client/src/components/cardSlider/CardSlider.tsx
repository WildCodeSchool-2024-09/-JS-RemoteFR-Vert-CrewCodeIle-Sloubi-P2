import { useState } from "react";
import type { boardGameListType } from "../../assets/lib/definition";
import CardGame from "../cardGame/CardGame";
import style from "./cardSlider.module.css";

export default function CardSlider({
  boardGamesList,
  handleClickFavorite,
  handleClickFavoriteOff,
}: {
  boardGamesList: boardGameListType[];
  handleClickFavorite(id: string): void;
  handleClickFavoriteOff(id: string): void;
}) {
  //gestion de l'état

  const [slider, setSlider] = useState(0);

  //logique du bouton précedent

  const previousSlide = () =>
    slider > 0 ? setSlider(slider - 1) : setSlider(boardGamesList.length - 1);

  //logique du bouton suivant

  const nextSlide = () =>
    slider < boardGamesList.length - 1 ? setSlider(slider + 1) : setSlider(0);

  // carte de gauche

  const previous = slider === 0 ? boardGamesList.length - 1 : slider - 1;

  // carte droite

  const next = slider === boardGamesList.length - 1 ? 0 : slider + 1;

  return (
    <>
      <section className={style.sliderFolder}>
        <article className={style.cardSliderLeft}>
          <CardGame
            gameId={boardGamesList[previous].gameId}
            name={boardGamesList[previous].name}
            rating={boardGamesList[previous].averageRating}
            image={boardGamesList[previous].image}
            handleClickFavorite={handleClickFavorite}
            handleClickFavoriteOff={handleClickFavoriteOff}
          />
        </article>
        <article className={style.cardSliderRight}>
          <CardGame
            gameId={boardGamesList[next].gameId}
            name={boardGamesList[next].name}
            rating={boardGamesList[next].averageRating}
            image={boardGamesList[next].image}
            handleClickFavorite={handleClickFavorite}
            handleClickFavoriteOff={handleClickFavoriteOff}
          />
        </article>
        <article className={style.cardSlider}>
          <CardGame
            gameId={boardGamesList[slider].gameId}
            name={boardGamesList[slider].name}
            rating={boardGamesList[slider].averageRating}
            image={boardGamesList[slider].image}
            handleClickFavorite={handleClickFavorite}
            handleClickFavoriteOff={handleClickFavoriteOff}
          />
        </article>
        <button
          type="button"
          onClick={previousSlide}
          className={`${style.buttonSlider} ${style.buttonLeft}`}
        >
          {" "}
        </button>
        <button
          type="button"
          onClick={nextSlide}
          className={`${style.buttonSlider} ${style.buttonRight}`}
        >
          {" "}
        </button>
      </section>
    </>
  );
}
