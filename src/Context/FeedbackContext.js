import {createContext , useState} from "react";
//export default
const FeedbackContext = createContext()

//this line export for use in App
export const FeedbackProvider = ({children}) => {
    const [feedback , setFeedback] = useState([{
        id:1,
        text : 'test from context ',
        rating:10
    }])
    return <FeedbackContext.Provider value={{feedback,}}>
        {children}
    </FeedbackContext.Provider>
}
export default FeedbackContext

