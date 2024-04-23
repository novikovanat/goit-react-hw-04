import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ photosArray }) {
  console.log(photosArray);
  const imageList = photosArray.map(({ urls:{small}, alt_description
    , id }) => (
    <li key={id}>
      <ImageCard scr={small} alt={alt_description
} />
    </li>
  ));
  return <ul>{imageList}</ul>;
}
