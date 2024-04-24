export default function ErrorMessage({ errorText }) {
  return (
    <div>
      <p>{errorText}</p>
      <p>Try reload the page</p>
    </div>
  );
}
