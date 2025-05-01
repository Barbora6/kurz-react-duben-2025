import "./Seasons.css";

export const Seasons = ({
  heading,
  imageSource,
  imageAlternativeText,
  children
}) => {
  return (
    <section className="Season">
      <h1>{heading}</h1>
      <img
        src={imageSource}
        alt={imageAlternativeText}
        className="Season-image"
      />
      {children}
    </section>
  );
};
