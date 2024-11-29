import headerInfo from "../../assets/data/headerInfo.json";
import type { headerInfoProps } from "../../assets/lib/definition";
import style from "./heroHeader.module.css";

export default function HeroHeader() {
  const [{ title, subtitle, description }]: headerInfoProps[] = headerInfo;
  return (
    <>
      <header className={style.header}>
        <section className={style.title}>
          <h1 className={style.titlePage}>{title}</h1>
          <h2 className={style.subtitle}>{subtitle}</h2>
        </section>
        <article className={style.boxDescription}>
          <p className={style.description}>{description}</p>
        </article>
      </header>
    </>
  );
}
