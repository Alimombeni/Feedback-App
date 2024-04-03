import Header from "./Components/Header";
import FeedbackItem from "./Components/FeedbackItem";
import FeedbackData from "./Components/data/feedbackData";
import {useState} from "react";
import FeedbackList from "./Components/feedbacklist";
import feedbackItem from "./Components/FeedbackItem";
function App() {
  const [feedback, setFeedback] = useState(FeedbackData)
    const deleteFeedback = (id) => {
     if (window.confirm('Are you sure you want to delete?')) {
         setFeedback(feedback.filter( (item) => item.id !== id ))
     }
    }

    return (
      <>
    <Header />
        <div className='container'>
        <FeedbackList
            feedback={feedback}
            handleDelete={deleteFeedback}
        />
        </div>
      </>
  );
}
export default App;








