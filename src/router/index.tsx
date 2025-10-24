import App from '../App'
import Home from '../views/Home'
import About from '../views/About'
import User from '../views/User'

// Navigatec重定向组件
import {Navigate} from 'react-router-dom'


const routes = [
    {
        path:"/",
        element: <Navigate to="/home"/>
    },
    {
        path:"/home",
        element: <Home/>,
    },
    {
        path:"/about",
        element: <About/>,
    },
    {
        path:"/user",
        element: <User/>,
    }
]

export default routes