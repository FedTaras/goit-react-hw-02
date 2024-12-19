import Description from "./Description/Description";
import Options from "./Options/Options";
import Feedback from "./Feedback/Feedback";
import Notification from "./Notification/Notification";
import { useEffect, useState } from "react";
import { container } from "../src/App.module.css";

function App() {
  const [feedbacks, setFeedbacks] = useState(() => {
    const saveFeedbacks = JSON.parse(localStorage.getItem("feedbacks"));
    if (saveFeedbacks) {
      return saveFeedbacks;
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });
  const totalFeedback = feedbacks.good + feedbacks.bad + feedbacks.neutral;
  const positiveFeedback = Math.round((feedbacks.good / totalFeedback) * 100);

  const updateFeedback = (feedbackType) => {
    setFeedbacks((feedbacks) => ({
      ...feedbacks,
      [feedbackType]: feedbacks[feedbackType] + 1,
    }));
  };

  const resetFeedbacks = () => {
    setFeedbacks({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  useEffect(() => {
    localStorage.setItem("feedbacks", JSON.stringify(feedbacks));
  }, [feedbacks]);

  return (
    <>
      <div className={container}>
        <Description />
        <Options
          hadleFeedback={updateFeedback}
          resetVisible={totalFeedback}
          resetFeedbacks={resetFeedbacks}
        />
        {totalFeedback ? (
          <Feedback
            feedbackGood={feedbacks.good}
            feedbackNeutral={feedbacks.neutral}
            feedbackBad={feedbacks.bad}
            totalFeedback={totalFeedback}
            positiveFeedback={positiveFeedback}
          />
        ) : (
          <Notification message="No feedback yet" />
        )}
      </div>
    </>
  );
}

export default App;
