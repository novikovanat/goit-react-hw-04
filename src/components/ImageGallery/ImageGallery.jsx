import ImageModal from "../ImageModal/ImageModal";

export default function ImageGallery({ photosArray: { results } }) {
  console.log("image gallary:", results)
  const imageList = results.map(
    ({ urls: { small, regular }, alt_description, id }) => (
      <li key={id}>
        <ImageModal src={small} alt={alt_description} fullSize={regular} />
      </li>
    )
  );
  return <ul>{imageList}</ul>;
}
