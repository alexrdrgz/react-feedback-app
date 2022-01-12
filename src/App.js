import { useState } from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {v4 as uuidv4} from 'uuid'
import Header from './components/Header.jsx'
import FeedbackData from './data/FeedbackData.js'
import FeedbackList from './components/FeedbackList.jsx'
import FeedbackStats from './components/FeedbackStats.jsx'
import FeedbackForm from './components/FeedbackForm.jsx'
import AboutPage from './pages/AboutPage.jsx'
import AboutIconLink from './components/shared/AboutIconLink.jsx'

import {FeedbackProvider} from './context/FeedBackContext'


function App() {
    const [feedback, setFeedback] = useState(FeedbackData)

    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want to delete?')){
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }



    return (
        <FeedbackProvider>
            <Router>
                <Header text="Feedback App"/>
                <div className="container ">
                    <Routes>
                        <Route exact path="/" element={
                            <>
                                <FeedbackForm  handleAdd={addFeedback}/>
                                <FeedbackStats feedback={feedback}/>
                                <FeedbackList handleDelete={deleteFeedback} feedback={feedback}/>
                            </>
                        }> 
                        </Route>
                        <Route path='/about' element={<AboutPage/>}/>
                    </Routes>
                    <AboutIconLink />
                </div>
            </Router>
        </FeedbackProvider>
    )
}

export default App