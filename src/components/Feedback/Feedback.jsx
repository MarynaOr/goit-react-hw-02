export default function Feedback({ feedback, total, positivePercentage }) {
  return (
    <div>
      <ul>
        <li>
          <p>Good: {feedback.good}</p>
        </li>
        <li>
          <p>Neutral: {feedback.neutral}</p>
        </li>
        <li>
          <p>Bad: {feedback.bad} </p>
        </li>
        <li>
          <p>Total: {total} </p>
        </li>
        <li>
          <p>Pozitive: {positivePercentage} %</p>
        </li>
      </ul>
    </div>
  );
}
