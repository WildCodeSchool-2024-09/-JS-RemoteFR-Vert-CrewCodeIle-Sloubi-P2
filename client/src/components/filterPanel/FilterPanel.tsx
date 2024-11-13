import { useState } from "react";
import type { filterPanelProps } from "../../assets/lib/definition";
import style from "./filterPanel.module.css";

function FilterPanel({ filterGame, setFilterGame }: filterPanelProps) {
  //state button (true or false)
  const [displayTime, setDisplayTime] = useState(false);
  const [displayRating, setDisplayRating] = useState(false);
  const [displayType, setDisplayType] = useState(false);
  const [displayPlayers, setDisplayPlayers] = useState(false);
  // function on change with state
  const handleClickPlayers = () =>
    displayPlayers ? setDisplayPlayers(false) : setDisplayPlayers(true);
  const handleClickTime = () =>
    displayTime ? setDisplayTime(false) : setDisplayTime(true);
  const handleClickRating = () =>
    displayRating ? setDisplayRating(false) : setDisplayRating(true);
  const handleClickType = () =>
    displayType ? setDisplayType(false) : setDisplayType(true);
  //function store value of checkbox checked

  const handleChangeFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.checked ? setFilterGame(e.target.value) : setFilterGame("");
  };

  return (
    <>
      <section className={style.filter}>
        {/*button min players & filter*/}
        <div className={style.button_filter}>
          <button
            className={style.button}
            type="button"
            onClick={handleClickPlayers}
          >
            Min. players
          </button>
          <div>
            {displayPlayers && (
              <fieldset className={style.fieldset}>
                <label className={style.label} htmlFor="maxPlayer1">
                  <input
                    type="checkbox"
                    id="minPlayer1"
                    name="minPlayers"
                    value="1"
                    checked={filterGame === "1"}
                    onChange={handleChangeFilter}
                  />
                  1 player
                </label>

                <label className={style.label} htmlFor="maxPlayer2">
                  <input
                    type="checkbox"
                    id="minPlayer2"
                    name="minPlayers"
                    value="2"
                    checked={filterGame === "2"}
                    onChange={handleChangeFilter}
                  />
                  2 players
                </label>
                <label className={style.label} htmlFor="maxPlayer3">
                  <input
                    type="checkbox"
                    id="minPlayer3"
                    name="minPlayers"
                    value="3"
                    checked={filterGame === "3"}
                    onChange={handleChangeFilter}
                  />
                  3 players
                </label>
                <label className={style.label} htmlFor="maxPlayer4">
                  <input
                    type="checkbox"
                    id="minPlayer4"
                    name="minPlayers"
                    value="4"
                    checked={filterGame === "4"}
                    onChange={handleChangeFilter}
                  />
                  4 players
                </label>
              </fieldset>
            )}
          </div>
        </div>
        {/*button playing time & filter*/}
        <div className={style.button_filter}>
          <button
            className={style.button}
            type="button"
            onClick={handleClickTime}
          >
            Playing time
          </button>
          <div>
            {displayTime && (
              <fieldset className={style.fieldset}>
                <label className={style.label} htmlFor="time1">
                  <input
                    type="checkbox"
                    id="time1"
                    name="time"
                    value="30"
                    checked={filterGame === "30"}
                    onChange={handleChangeFilter}
                  />
                  30 min
                </label>
                <label className={style.label} htmlFor="time2">
                  <input
                    type="checkbox"
                    id="time2"
                    name="time"
                    value="60"
                    checked={filterGame === "60"}
                    onChange={handleChangeFilter}
                  />
                  60 min
                </label>
                <label className={style.label} htmlFor="time3">
                  <input
                    type="checkbox"
                    id="time3"
                    name="time"
                    value="90"
                    checked={filterGame === "90"}
                    onChange={handleChangeFilter}
                  />
                  90 min{" "}
                </label>
                <label className={style.label} htmlFor="time3">
                  <input
                    type="checkbox"
                    id="time4"
                    name="time"
                    value="120"
                    checked={filterGame === "120"}
                    onChange={handleChangeFilter}
                  />
                  120 min
                </label>
              </fieldset>
            )}
          </div>
        </div>
        {/*button rating time & filter*/}
        <div className={style.button_filter}>
          <button
            className={style.button}
            type="button"
            onClick={handleClickRating}
          >
            Rating
          </button>
          <div>
            {displayRating && (
              <fieldset className={style.fieldset}>
                <label className={style.label} htmlFor="rating6">
                  <input
                    type="checkbox"
                    id="rating6"
                    name="rating"
                    value="6"
                    checked={filterGame === "6"}
                    onChange={handleChangeFilter}
                  />
                  6
                </label>
                <label className={style.label} htmlFor="rating7">
                  <input
                    type="checkbox"
                    id="rating7"
                    name="rating"
                    value="7"
                    checked={filterGame === "7"}
                    onChange={handleChangeFilter}
                  />
                  7
                </label>
                <label className={style.label} htmlFor="rating8">
                  <input
                    type="checkbox"
                    id="rating7"
                    name="rating"
                    value="8"
                    checked={filterGame === "8"}
                    onChange={handleChangeFilter}
                  />
                  8
                </label>
                <label className={style.label} htmlFor="rating9">
                  <input
                    type="checkbox"
                    id="rating9"
                    name="rating"
                    value="9"
                    checked={filterGame === "9"}
                    onChange={handleChangeFilter}
                  />
                  9
                </label>
                <label className={style.label} htmlFor="rating10">
                  <input
                    type="checkbox"
                    id="rating10"
                    name="rating"
                    value="10"
                    checked={filterGame === "10"}
                    onChange={handleChangeFilter}
                  />
                  10
                </label>
              </fieldset>
            )}
          </div>
        </div>
        {/*button type of game & filter*/}
        <div className={style.button_filter}>
          <button
            className={style.button}
            type="button"
            onClick={handleClickType}
          >
            Type
          </button>
          <div>
            {displayType && (
              <fieldset className={style.fieldset}>
                <label className={style.label} htmlFor="type1">
                  <input
                    type="checkbox"
                    id="type1"
                    name="type"
                    value="Multi-Use Cards"
                    checked={filterGame === "Multi-Use Cards"}
                    onChange={handleChangeFilter}
                  />
                  Deck builder
                </label>
                <label className={style.label} htmlFor="type2">
                  <input
                    type="checkbox"
                    id="type2"
                    name="type"
                    value="Dice Rolling"
                    checked={filterGame === "Dice Rolling"}
                    onChange={handleChangeFilter}
                  />
                  Dice Rolling
                </label>
                <label className={style.label} htmlFor="type3">
                  <input
                    type="checkbox"
                    id="type3"
                    name="type"
                    value="Cooperative Game"
                    checked={filterGame === "Cooperative Game"}
                    onChange={handleChangeFilter}
                  />
                  Cooperative
                </label>
                <label className={style.label} htmlFor="type4">
                  <input
                    type="checkbox"
                    id="type4"
                    name="type"
                    value="Automatic Resource Growth"
                    checked={filterGame === "Automatic Resource Growth"}
                    onChange={handleChangeFilter}
                  />
                  Ressource management
                </label>
              </fieldset>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default FilterPanel;