import css from "./ImageCard.module.css";
export default function ImageCard({ small, alt }) {
  return (
    <>
      <img className={css.smallImage} src={small} alt={alt}  />
    </>
  );
}

