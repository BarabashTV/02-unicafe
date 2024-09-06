import StatisticLine from "./StatisticLine";

const Statistics = (props) => {
  if (props.totalFeedbacks === 0) {
    return <p>No feedback given</p>;
  }

  return (
    <div>
      <StatisticLine text="Good" value={props.good} />
      <StatisticLine text="Neutral" value={props.neutral} />
      <StatisticLine text="Bad" value={props.bad} />
      <StatisticLine text="All" value={props.totalFeedbacks} />
      <StatisticLine text="Average" value={props.average.toFixed(2)} />
      <StatisticLine
        text="Positive"
        value={`${props.positivePercentage.toFixed(2)} %`}
      />
    </div>
  );
};

export default Statistics;
