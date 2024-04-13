import {createContext, useState, useEffect} from "react";
import {json} from "react-router-dom";
//export default
const FeedbackContext = createContext()

//this line export for use in App
export const FeedbackProvider = ({children}) => {
    const [isLoading,setIsLoading] = useState(true)
    const [feedback, setFeedback] = useState([])
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })
    useEffect(() => {
        fetchFeedback()
    }, [])
//Fetch feedback
    const fetchFeedback = async () => {
        const response = await fetch(`/feedback?_sort=id`)
        const data = await response.json()
        setFeedback(data)
        setIsLoading(false)
    }
    //update feedback

    const updateFeedback =async (id, updItem) => {
    const response = await fetch(`/feedback/${id}` , {
        method : 'PUT',
        headers : {
            'Content-Type' : 'application/json',
        },
        body : JSON.stringify(updItem)
    })
        const data = await response.json()

        setFeedback(feedback.map((item) => item.id === id ? {...item, ...data} : item))
    }
//editFeedback function
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }
//deleteFeedback function delete
    const deleteFeedback =async (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            await fetch(`/feedback/${id} ` , {method : 'DELETE'})
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }
// addFeedback function add
    const addFeedback = async (newFeedback) => {
        const response = await fetch('/feedback' , {
            method:'POST',
            headers: {
                'content-Type' : 'application/json'
            },
            body: JSON.stringify(newFeedback),
        })
        const data = await response.json()
        setFeedback([data, ...feedback])
    }
    //FeedbackProvider
    return <FeedbackContext.Provider
        value={{
            feedback,
            feedbackEdit,
            isLoading,
            deleteFeedback,
            addFeedback,
            editFeedback,
            updateFeedback,
        }}>
        {children}
    </FeedbackContext.Provider>
}
export default FeedbackContext


