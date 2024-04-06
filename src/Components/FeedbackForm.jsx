import {useState} from "react";

import Card from "./shared/Card";

function FeedbackForm () {
    //textSTATE for keep input user character
    const [text, setText]=useState('')
    //btnSTATE for keep button disabled
    const [btnDisabled, setBtnDisabled]=useState(true)
    //messageSTATE for showing text message 10 character checking
    const [message, setMessage]=useState('')

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

    return(

        <Card>
            <form>
                <h2>How would you rate your service with us?</h2>
            {/* @todo - rating select component */}
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