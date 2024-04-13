import Header from "./Components/Header";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import FeedbackList from "./Components/FeedbackList";
import FeedbackStats from "./Components/FeedbackStats";
import FeedbackForm from "./Components/FeedbackForm";
import {FeedbackProvider} from "./Context/FeedbackContext";

function App() {

    return (
            <FeedbackProvider>
        <Router>
            <Header/>
            <div className='container'>
                <Routes>
                    <Route path='/' element={
                        <>
                        <FeedbackForm />
                        <FeedbackStats/>
                        <FeedbackList />
                    </>}>
                    </Route>
                </Routes>
            </div>

        </Router>
            </FeedbackProvider>
    );
}
export default App;








