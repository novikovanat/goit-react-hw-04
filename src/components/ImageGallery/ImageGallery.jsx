import ImageModal from "../ImageModal/ImageModal";

export default function ImageGallery({ photosArray }) {
  console.log(photosArray);
  const imageList = photosArray.map(
    ({ urls: { thumb, regular }, alt_description, id }) => (
      <li key={id}>
        <ImageModal src={thumb} alt={alt_description} fullSize={regular} />
      </li>
    )
  );
  return <ul>{imageList}</ul>;
}
