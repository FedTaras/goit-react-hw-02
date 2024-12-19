import { feedback } from "./Feedback.module.css";

function Feedback({
  feedbackGood,
  feedbackBad,
  feedbackNeutral,
  totalFeedback,
  positiveFeedback,
}) {
  return (
    <div className={feedback}>
      <p>
        Good: <span>{feedbackGood}</span>
      </p>
      <p>
        Neutral: <span>{feedbackNeutral}</span>
      </p>
      <p>
        Bad: <span>{feedbackBad}</span>
      </p>
      <p>
        Total: <span>{totalFeedback}</span>
      </p>
      <p>
        Positive: <span>{positiveFeedback}%</span>
      </p>
    </div>
  );
}

export default Feedback;
