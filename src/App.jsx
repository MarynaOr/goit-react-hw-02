import { useState, useEffect } from "react";
import Description from "./components/Description/Description.jsx";
import Options from "./components/Options/Options.jsx";
import Feedback from "./components/Feedback/Feedback.jsx";
import Notification from "./components/Notification/Notification.jsx";

import "./App.css";

function App() {
  const Results = { good: 0, neutral: 0, bad: 0 };
  const [newResults, setNewResults] = useState(() => {
    const saveFeedback = JSON.parse(localStorage.getItem("feedback"));

    return saveFeedback ? saveFeedback : { good: 0, neutral: 0, bad: 0 };
  });

  const updateFeedback = (feedbackType) => {
    setNewResults((prev) => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1,
    }));
  };
  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(newResults));
  }, [newResults]);

  const totalFeedback = newResults.good + newResults.neutral + newResults.bad;
  const positivePercentage = Math.round(
    (newResults.good / totalFeedback) * 100
  );

  const reset = () => {
    setNewResults(Results);
  };

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        reset={reset}
        total={totalFeedback}
      />

      {totalFeedback > 0 ? (
        <Feedback
          feedback={newResults}
          total={totalFeedback}
          positivePercentage={positivePercentage}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;



