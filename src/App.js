import { useState } from 'react'
import Header from './components/Header.jsx'
import FeedbackItem from './components/FeedbackItem.jsx'
import FeedbackData from './data/FeedbackData.js'
import FeedbackList from './components/FeedbackList.jsx'


function App() {
    const [feedback, setFeedback] = useState(FeedbackData)

    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want to delete?')){
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    return (
        <>
            <Header text="Feedback App"/>
            
            <div className="container ">
                <FeedbackList handleDelete={deleteFeedback} feedback={feedback}/>
            </div>
        </>
    )
}

export default App