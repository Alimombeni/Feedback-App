import {createContext, useState, useEffect} from "react";
import {v4 as uuidv4} from "uuid";
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
        const response = await fetch(`http://localhost:5000/feedback?_sort=id`)
        const data = await response.json()
        setFeedback(data)
        setIsLoading(false)
    }

    //update feedback
    const updateFeedback = (id, updItem) => {
        setFeedback(feedback.map((item) => item.id === id ? {...item, ...updItem} : item))
    }
//editFeedback function
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }
//deleteFeedback function delete
    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }
// addFeedback function add
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
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


