import { motion, AnimatePresence } from 'framer-motion'
import { useContext } from 'react'

import FeedbackItem from './FeedbackItem'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackList() {
  const {feedback} = useContext(FeedbackContext)
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
              <FeedbackItem key={item.id} item={item} />
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
export default FeedbackList
