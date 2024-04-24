export default function ImageCard({ src, alt, fullSize }) {
  return (
    <div>
      <a href={fullSize} onClick={(event) => event.preventDefault}>
        <img src={src} alt={alt} />
      </a>
    </div>
  );
}
