import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export default function ImageGallery({
  photosArray: { results },
  onOpen,
  onItem,
}) {
  const imageList = results.map(
    ({ urls: { small }, alt_description, id }, index) => (
      <li
        key={id}
        onClick={() => {
          onOpen(true);
          onItem(index);
        }}
      >
        <ImageCard small={small} alt={alt_description} onOpen={onOpen} />
      </li>
    )
  );
  return <ul className={css.flex}>{imageList}</ul>;
}
