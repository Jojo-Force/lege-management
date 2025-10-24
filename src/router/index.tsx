import App from '../App'
import React,{lazy} from 'react'
import Home from '../views/Home'
//const Home = lazy(()=>import("../views/Home"))
const About = lazy(()=>import("../views/About"))
const User = lazy(()=>import("../views/User"))

// Navigatec重定向组件
// 懒加载的模式需要我们给他添加一个Loading组件
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
        element: 
        <React.Suspense fallback={<div>Loading...</div>}>
            <About/>
        </React.Suspense>,
    },
    {
        path:"/user",
        element:         
        <React.Suspense fallback={<div>Loading...</div>}>
            <User/>
        </React.Suspense>,
    }
]

export default routes