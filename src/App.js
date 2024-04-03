import Header from "./Components/Header";
import FeedbackItem from "./Components/FeedbackItem";
import FeedbackData from "./Components/data/feedbackData";
import {useState} from "react";
import FeedbackList from "./Components/feedbacklist";
function App() {
  const [feedback, setFeedback] = useState(FeedbackData)


    return (
      <>
    <Header />

        <div className='container'>
        <FeedbackList feedback={feedback}/>

        </div>

      </>
  );
}
export default App;








