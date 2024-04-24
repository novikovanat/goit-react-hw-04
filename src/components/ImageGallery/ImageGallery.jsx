import ImageModal from "../ImageModal/ImageModal";

export default function ImageGallery({ photosArray }) {
  console.log(photosArray);
  const imageList = photosArray.map(
    ({ urls: { small_s3, regular }, alt_description, id }) => (
      <li key={id}>
        <ImageModal src={small_s3} alt={alt_description} fullSize={regular} />
      </li>
    )
  );
  return <ul>{imageList}</ul>;
}
