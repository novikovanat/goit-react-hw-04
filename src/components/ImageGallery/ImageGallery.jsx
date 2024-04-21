import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ imageArray }) {
  const imageList = imageArray.map(({ src, alt, id }) => (
    <li key={id}>
      <ImageCard scr={src} alt={alt} />
    </li>
  ));
  return <ul>{imageList}</ul>;
}
