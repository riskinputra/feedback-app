import PropTypes from 'prop-types'
import { motion, AnimatePresence } from 'framer-motion'

import FeedbackItem from './FeedbackItem'

function FeedbackList({ feedback, handleDelete }) {
  if (!feedback || !feedback.length) {
    return <p>No Feedback Yet</p>
  }

  return (
    <div>
      <div className="feedback-list">
        <AnimatePresence>
          {feedback.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <FeedbackItem key={item.id} item={item} handleDelete={(id) => handleDelete(id)} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
    
    // <div>
    //   <div className="feedback-list">
    //     {feedback.map((item) => (
    //       <FeedbackItem key={item.id} item={item} handleDelete={(id) => handleDelete(id)} />
    //     ))}
    //   </div>
    // </div>
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
