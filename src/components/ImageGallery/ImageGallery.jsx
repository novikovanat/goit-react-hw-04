import ImageModal from "../ImageModal/ImageModal";
import css from "./ImageGallery.module.css"

export default function ImageGallery({ photosArray: { results } }) {
  const imageList = results.map(
    ({ urls: { small, regular }, alt_description, id }) => (
      <li key={id}>
        <ImageModal src={small} alt={alt_description} fullSize={regular} />
      </li>
    )
  );
  return <ul className={css.flex}>{imageList}</ul>;
}
