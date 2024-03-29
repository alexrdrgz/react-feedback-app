import { useState } from "react"
import Card from "./shared/Card"
import Button from "./shared/Button"
import RatingSelect from "./shared/RatingSelect"


function FeedbackForm({handleAdd}) {
    const [text, setText] = useState('')
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')
    const [rating, setRating] = useState(10)

    const handleTextChange = (e) => {
        if(text === ''){
            setBtnDisabled(true)
            setMessage(null)
        } else if(text !== '' && text.trim().length <= 10){
            setMessage('Text must be 10 characters')
            setBtnDisabled(true)
        }else {
            setMessage(null)
            setBtnDisabled(false)
        }

        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(text.trim().length > 10 ){
            const newFeedback = {
                text,
                rating,
            }

            handleAdd(newFeedback)
            setText('')
        }
    }

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                How Would You Rate Your Service With Us?
                
                <RatingSelect select={(rating) => setRating(rating)}/>
                <div className="input-group">
                    <input 
                        onChange={handleTextChange} 
                        type="text" 
                        placeholder="Write a review" 
                        value={text}
                    />
                    <Button type="submit" isDisabled={btnDisabled} children={message}>Send</Button>
                </div>
                <p>{message}</p>
            </form>
        </Card>
    )
}

export default FeedbackForm
