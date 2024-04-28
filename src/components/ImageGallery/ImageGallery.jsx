import ImageModal from "../ImageModal/ImageModal";

export default function ImageGallery({ photosArray: { results } }) {
  if (results === undefined) {
    return;
  }
  const imageList = results.map(
    ({ urls: { small, raw }, alt_description, id }) => (
      <li key={id}>
        <ImageModal src={small} alt={alt_description} fullSize={raw} />
      </li>
    )
  );
  return <ul>{imageList}</ul>;
}
