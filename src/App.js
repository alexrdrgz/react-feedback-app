import { useState } from 'react'
import Header from './components/Header.jsx'
import FeedbackData from './data/FeedbackData.js'
import FeedbackList from './components/FeedbackList.jsx'
import FeedbackStats from './components/FeedbackStats.jsx'
import FeedbackForm from './components/FeedbackForm.jsx'


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
                <FeedbackForm />
                <FeedbackStats feedback={feedback}/>
                <FeedbackList handleDelete={deleteFeedback} feedback={feedback}/>
            </div>
        </>
    )
}

export default App