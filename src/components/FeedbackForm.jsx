import Card from "./shared/Card"
import { useState } from "react"


function FeedbackForm() {
    const [text, setText] = useState('')

    const handleTextChange = (e) => {
        console.log(e.target.value)
    }

    return (
        <Card>
            <form>
                How Would You Rate Your Service With Us?
                {/* Rating Select Component */}

                <div className="input-group">
                    <input onChange={handleTextChange} type="text" placeholder="Write a review" />
                    <button type="submit">Send</button>
                </div>
            </form>
        </Card>
    )
}

export default FeedbackForm
