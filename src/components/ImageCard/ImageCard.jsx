import css from "./ImageCard.module.css";
export default function ImageCard({ small, alt }) {
  return (
    <div>
      <img src={small} alt={alt} />
    </div>
  );
}

