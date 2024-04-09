import Header from "./Components/Header";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import FeedbackList from "./Components/FeedbackList";
import FeedbackStats from "./Components/FeedbackStats";
import FeedbackForm from "./Components/FeedbackForm";

import AboutPage from "./Components/pages/AboutPage";
import AboutIconLink from "./Components/AboutIconLink";
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
                    <Route path='/about' element={<AboutPage/>}/>
                </Routes>
            </div>
<AboutIconLink/>
        </Router>

            </FeedbackProvider>
    );
}

export default App;








