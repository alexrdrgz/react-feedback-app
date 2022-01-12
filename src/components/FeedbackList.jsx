import {motion, AnimatePresence} from 'framer-motion'
import PropTypes from 'prop-types'
import FeedbackItem from "./FeedbackItem"

function FeedbackList({feedback, handleDelete}){
    console.log(feedback)
    if (!feedback || feedback.length === 0){
        return 'No Feedback Yet'
    }

    // return (

    //     <div className="feedback-list">
    //         {feedback.map( (item) => (
    //             <FeedbackItem handleDelete={handleDelete} key={item.id} item={item} />
    //         ))}
    //     </div>
    // )

    return (

        <div className="feedback-list">
            <AnimatePresence>
                {feedback.map( (item) => (
                    <motion.div key={item.id} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
                        <FeedbackItem handleDelete={handleDelete} key={item.id} item={item} />
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    )
    
}

export default FeedbackList

