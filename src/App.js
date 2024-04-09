import Header from "./Components/Header";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import FeedbackData from "./Components/data/feedbackData";
import {useState} from "react";
import FeedbackList from "./Components/FeedbackList";
import FeedbackStats from "./Components/FeedbackStats";
import FeedbackForm from "./Components/FeedbackForm";
import {v4 as uuidv4 } from "uuid";
import AboutPage from "./Components/pages/AboutPage";
import AboutIconLink from "./Components/AboutIconLink";
import {FeedbackProvider} from "./Context/FeedbackContext";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)
    const deleteFeedback = (id) => {
     if (window.confirm('Are you sure you want to delete?')) {
         setFeedback(feedback.filter( (item) => item.id !== id ))
     }
    }
const addFeedback = (newFeedback) => {
      newFeedback.id = uuidv4()
        setFeedback([newFeedback , ...feedback ])
}
    return (

            <FeedbackProvider>

        <Router>
            <Header/>
            <div className='container'>
                <Routes>
                    <Route path='/' element={
                        <>
                        <FeedbackForm handleAdd={addFeedback}/>
                        <FeedbackStats feedback={feedback}/>
                        <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
                    </>}>
                    </Route>
                    <Route path='/about' element={<AboutPage/>}/>
                </Routes>
            </div>
<AboutIconLink/>
        </Router>

            </FeedbackProvider>
    );
}

export default App;








