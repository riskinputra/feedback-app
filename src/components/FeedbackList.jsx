import PropTypes from 'prop-types'

import FeedbackItem from './FeedbackItem'

function FeedbackList({ feedback, handleDelete }) {
  if (!feedback || !feedback.length) {
    return <p>No Feedback Yet</p>
  }

  return (
    <div>
      <div className="feedback-list">
        {feedback.map((item) => (
          <FeedbackItem key={item.id} item={item} handleDelete={(id) => handleDelete(id)} />
        ))}
      </div>
    </div>
  )
}

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired
    })
  )
}

export default FeedbackList
