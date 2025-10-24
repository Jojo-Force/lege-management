import { useState } from 'react'
import Comp1 from "@/components/Comp1"
import Comp2 from "@/components/Comp2"

import { UpOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { useRoutes,Link } from 'react-router-dom';
import router from "./router"

function App() {
  const [count, setCount] = useState(0)
  const outlet = useRoutes(router)
  return (
      <div className="App">
        顶级组件
        <Comp1/>
        <Comp2/>
        <Button type="primary">Primary Button</Button>
        <UpOutlined style={{ fontSize:'10px',color:'red'}}/>
        {/* 占位符组件 */}
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/user">User</Link>
        {outlet}
      </div>
  )
}

export default App
