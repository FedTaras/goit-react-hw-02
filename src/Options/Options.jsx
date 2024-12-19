import { buttons } from "../Options/Options.module.css";

const Options = ({ hadleFeedback, resetVisible, resetFeedbacks }) => {
  return (
    <div className={buttons}>
      <button onClick={() => hadleFeedback("good")}>Good</button>
      <button onClick={() => hadleFeedback("neutral")}>Neutral</button>
      <button onClick={() => hadleFeedback("bad")}>Bad</button>
      {resetVisible ? <button onClick={resetFeedbacks}>Reset</button> : ""}
    </div>
  );
};

export default Options;
