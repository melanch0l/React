import { useState } from "react";
import Star from "./Star";
//pass default value as props
const Rating = ({
  heading = "Rate Us",
  feedbackMsg = ["Terrible", "Poor", "Fair", "Good", "Excellent"],
  color = "gold",
}) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const stars = Array.from({ length: 5 }, (_, i) => i + 1);

  return (
    // <div style={style.container}>
    //   <h2 style={style.heading}>Rate Us!</h2>
    // </div>
    <div className="rating-container">
      <h2>{heading}</h2>
      <div className="stars">
        {stars.map((star) => (
          //passing stat to child component as props
          <Star
            key={star}
            star={stars}
            rating={rating}
            hover={hover}
            color={color}
            ratingClick={console.log("Hello")}
          />
          // <span
          //   onClick={() => setRating(star)}
          //   onMouseEnter={() => setHover(star)}
          //   onMouseLeave={() => setHover(0)}
          //   key={star}
          //   className={`stars ${star <= (hover || rating) ? "active" : ""}`}
          // >
          //   {"\u2605"}
          // </span>
        ))}
      </div>
      {rating > 0 && <p className="feedback">{feedbackMsg[rating - 1]}</p>}
    </div>
  );
};
// const style = {
//   container: {
//     textAlign: "center",
//     fontFamily: "sans-serif",
//     padding: "20px",
//   },
//   heading: {
//     color: "red",
//   },
// };
export default Rating;
