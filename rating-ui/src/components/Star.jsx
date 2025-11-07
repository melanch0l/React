const Star = ({ stars, rating, hover, color, ratingClick }) => {
  return (
    <span
      className="stars"
      style={{ color: stars <= (hover || rating) ? color : "#e1d3d3ff" }}
    >
      {"\u2605"}
    </span>
  );
};

export default Star;
