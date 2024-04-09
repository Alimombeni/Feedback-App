import {useContext , useState} from "react";
import FeedbackContext from "../Context/FeedbackContext";
import Card from "./shared/Card";
import RatingSelect from "./RatingSelect";
function FeedbackForm () {
    //textSTATE for keep input user character
    const [text, setText]=useState('')
    //ratingSTATE for keep rating 1 to 10
    const [rating, setRating]=useState(10)
    //btnSTATE for keep button disabled
    const [btnDisabled, setBtnDisabled]=useState(true)
    //messageSTATE for showing text message 10 character checking
    const [message, setMessage]=useState('')
    const {addFeedback} = useContext(FeedbackContext)
    const handleTextChange = (e) => {
        //when the input is empty
        if (text === ''){
            setBtnDisabled(true)
            setMessage(null)
        //when the input is less than 10 character
        }else if ( text !== '' && text.trim().length <=10) {
            setMessage('Text must be at least 10 characters')
            setBtnDisabled(true)
        //when the other condition is successfully enter
        }else {
            setMessage(null)
            setBtnDisabled(false)
        }
        setText(e.target.value)
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        if (text.trim().length > 10) {
            const newFeedback = {
                text,
                rating,
            }
            addFeedback(newFeedback)
            setText('')
        }
    }
    return(
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your service with us?</h2>
          <RatingSelect select={(rating) =>setRating(rating)} />
            <div className="input-group">
                <input onChange={handleTextChange} value={text} type="text" placeholder='write a review' />
                <button
                    type="submit"
                    className="btn btn-primary"
                    //change btnSTATE between true and false
                    disabled={btnDisabled} >Send</button>

            </div>
                {/*  if message is TRUE create <div> element and show 'Text must be at least 10 characters'  */}
                {message && <div className='message'>{message}</div>}
            </form>

        </Card>

    )

}

export default FeedbackForm