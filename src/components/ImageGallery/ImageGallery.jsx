import ImageCard from "../ImageCard/ImageCard";
import ImageModal from "../ImageModal/ImageModal";


export default function ImageGallery({ photosArray }) {
  const imageList = photosArray.map(
    ({ urls: { small }, alt_description, id }) => (
      <li key={id}>
        <ImageModal src={small} alt={alt_description} />
      </li>
    )
  );
  return <ul>{imageList}</ul>;
}
