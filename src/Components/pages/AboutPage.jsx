import Card from "../shared/Card";
import {Link, useNavigate, Navigate, Routes, Route} from 'react-router-dom'

function AboutPage () {
    const nav = useNavigate()
    const onNavigation = () => {
        console.log('this is navigation')
        nav('/')
    }
    const status = 200;
    if (status === 404) {
        return <Navigate to='/notfound'/>
    }

    return (
        <Card>
        <div>about </div>
            <h1>this is about page</h1>
            <p>Lorem ipsum dolor sit amet, consectetur.</p>
            <Link to='/'> home page</Link>
            <button onClick={onNavigation}>got to home page</button>

        </Card>
            )
}


export default AboutPage