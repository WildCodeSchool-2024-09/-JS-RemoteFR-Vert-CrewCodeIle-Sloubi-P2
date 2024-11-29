import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import type { commentProps } from "../../assets/lib/definition";
import type { gameDetailsType } from "../../assets/lib/definition";
import DisplayComment from "../displayComment/DisplayComment";
import style from "./comment.module.css";

export default function Comment({
  gameDetails,
}: { gameDetails: gameDetailsType }) {
  const [displayForm, setDisplayForm] = useState(false);
  const { register, handleSubmit, reset, formState } = useForm<commentProps>({
    defaultValues: { firstname: "", lastname: "", comment: "" },
  });
  const [userInput, setUserInput] = useState<commentProps[] | []>(
    JSON.parse(localStorage.getItem(gameDetails.gameId.toString()) || "[]"),
  );

  //Affichage du formulaire
  const handleClick = () => setDisplayForm(!displayForm);

  //Recupération des données formulaire & stockage dans le storage
  const userSubmit = (data: commentProps) => {
    setUserInput([...userInput, data]);

    localStorage.setItem(
      gameDetails.gameId.toString(),
      JSON.stringify([...userInput, data]),
    );
  };

  // Récupère le storage du game après chaque changement de jeu
  useEffect(() => {
    setUserInput(
      JSON.parse(localStorage.getItem(gameDetails.gameId.toString()) || "[]"),
    );
  }, [gameDetails]);

  // reset formulaire après submit
  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ firstname: "", lastname: "", comment: "" });
    }
  }, [formState, reset]);

  return (
    <>
      <section className={style.comment}>
        {userInput.map((u) => (
          <DisplayComment item={u} key={u.id} />
        ))}
      </section>
      <button className={style.button} type="button" onClick={handleClick}>
        Add Comment
      </button>
      {displayForm && (
        <form className={style.form} onSubmit={handleSubmit(userSubmit)}>
          <div className={style.divInfo}>
            <label className={style.userInfo} htmlFor="firstname">
              First Name
              <input
                className={style.inputUserInfo}
                type="text"
                {...register("firstname", { required: true, minLength: 2 })}
                id="firstname"
              />
            </label>
            <label className={style.userInfo} htmlFor="lastname">
              Last Name
              <input
                className={style.inputUserInfo}
                type="text"
                {...register("lastname", { required: true, minLength: 2 })}
                id="lastname"
              />
            </label>
          </div>
          <textarea
            className={style.input}
            {...register("comment", { required: true, minLength: 3 })}
            id="comment"
            placeholder="Add your comment..."
          />
          <button className={style.buttonSubmit} type="submit">
            Submit
          </button>
        </form>
      )}
    </>
  );
}
