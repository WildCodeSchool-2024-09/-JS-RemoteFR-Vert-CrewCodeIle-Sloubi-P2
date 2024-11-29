import type { commentProps } from "../../assets/lib/definition";
import style from "./displayComment.module.css";

export default function DisplayComment({ item }: { item: commentProps }) {
  return (
    <>
      <article className={style.comment}>
        <div className={style.userInfo}>
          <h2 className={style.h2}>{item.firstname}</h2>
          <h2 className={style.h2}>{item.lastname}</h2>
        </div>
        <p className={style.userComment}>{item.comment}</p>
      </article>
    </>
  );
}
