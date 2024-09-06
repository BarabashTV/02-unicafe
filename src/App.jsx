import { useState } from "react";
import Statistics from "./Statistics";
import Button from "./Button";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => setGood(good + 1);
  const handleNeutralClick = () => setNeutral(neutral + 1);
  const handleBadClick = () => setBad(bad + 1);

  const totalFeedbacks = good + neutral + bad;

  let average;
  if (totalFeedbacks) {
    average = (good - bad) / totalFeedbacks;
  } else {
    average = 0;
  }

  let positivePercentage;
  if (totalFeedbacks) {
    positivePercentage = (good / totalFeedbacks) * 100;
  } else {
    positivePercentage = 0;
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <Button onClick={handleGoodClick} text="Good" />
      <Button onClick={handleNeutralClick} text="Neutral" />
      <Button onClick={handleBadClick} text="Bad" />
      <hr />
      <h1>Statistics</h1>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        totalFeedbacks={totalFeedbacks}
        average={average}
        positivePercentage={positivePercentage}
      />
    </div>
  );
};

export default App;
