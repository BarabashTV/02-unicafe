import { useState } from "react";

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
      <div>
        <button onClick={handleGoodClick}>Good</button>
        <button onClick={handleNeutralClick}>Neutral</button>
        <button onClick={handleBadClick}>Bad</button>
      </div>
      <hr />
      <h1>Statistics</h1>
      <div>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <hr />
        <p>All feedbacks: {totalFeedbacks.toFixed(2)}.</p>
        <p>Average: {average.toFixed(2)}.</p>
        <p>Positive average: {positivePercentage.toFixed(2)}%</p>
      </div>
    </div>
  );
};

export default App;
