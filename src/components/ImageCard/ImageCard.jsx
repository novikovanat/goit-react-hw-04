import css from "./ImageCard.module.css";
export default function ImageCard({ src, alt, isSmall }) {
  let selectorCss = isSmall ? css.smallImage : css.largeImage;

  return (
    <>
      <img className={selectorCss} src={src} alt={alt} />
    </>
  );
}
