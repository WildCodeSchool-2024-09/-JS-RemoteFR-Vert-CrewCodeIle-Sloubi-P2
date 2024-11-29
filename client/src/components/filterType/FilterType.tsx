import style from "./filterType.module.css";
function FilterType({
  setFilterType,
  category,
}: { setFilterType: (s: string) => void; category: string[] }) {
  const handleClick = (value: string) => setFilterType(value);
  return (
    <>
      <div className={style.filter}>
        {category.map((o) => (
          <button
            className={style.button}
            type="button"
            key={o}
            onClick={() => handleClick(o)}
          >
            {o}
          </button>
        ))}

        <button
          className={style.button}
          type="button"
          onClick={() => handleClick("")}
        >
          All games
        </button>
      </div>
    </>
  );
}

export default FilterType;
