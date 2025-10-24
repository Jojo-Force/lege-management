import { useState } from 'react'
import Comp1 from "@/components/Comp1"
import Comp2 from "@/components/Comp2"

import { UpOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { Outlet,Link } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

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
        <Outlet></Outlet>
      </div>
  )
}

export default App
