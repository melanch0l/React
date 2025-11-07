import Rating from "./components/Rating";

const App = () => {
  return (
    <>
      <Rating
        heading="How is Going with React?"
        feedbackMsg={["💩", "🙅", "🙂", "👍", "🔥"]}
      />
    </>
  );
};

export default App;
