import App from '../App'
import React,{Children, lazy} from 'react'
import Home from '../views/Home'
//const Home = lazy(()=>import("../views/Home"))
const About = lazy(()=>import("../views/About"))
const User = lazy(()=>import("../views/User"))
const Page1 = lazy(()=>import("../views/Page1"))
const Page2 = lazy(()=>import("../views/Page2"))

// Navigatec重定向组件
// 懒加载的模式需要我们给他添加一个Loading组件
import {Navigate} from 'react-router-dom'

const withLoadingComponent = (comp:JSX.element) => {
    return (
        <React.Suspense fallback={<div>Loading...</div>}>
        {comp}
        </React.Suspense>
    )
}

const routes = [
    // 嵌套路由开始
    {
        path:"/",
        element: <Navigate to="/page1"/>
    },
    {
        path:"/",
        element: <Home />,
        children:[
            {
                path:"/page1",
                element: withLoadingComponent(<Page1/>),
            },
            {
                path:"/page2",
                element: withLoadingComponent(<Page2/>),
            }
        ]
    },
    // 嵌套路由结束
    // {
    //     path:"/home",
    //     element: <Home/>,
    // },
    // {
    //     path:"/about",
    //     element: withLoadingComponent(<About/>),
    // },
    // {
    //     path:"/user",
    //     element: withLoadingComponent(<User/>),
    // },
    // {
    //     path:"/page1",
    //     element: withLoadingComponent(<Page1/>),
    // },
    // {
    //     path:"/page2",
    //     element: withLoadingComponent(<Page2/>),
    // }
]

export default routes