import PropTypes from 'prop-types';

function FeedbackStats({ feedback }) {
  let average = feedback.reduce((acc, cur) => {
    return acc + cur.rating / feedback.length;
  }, 0);

  //   Allows for only one decimal place and regex for removing trailing 0's
  average = average.toFixed(1).replace(/[.,]0$/, '');
  console.log(average);

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating : {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}

FeedbackStats.protoTypes = {
  feedback: PropTypes.array.isRequired,
};

export default FeedbackStats;
