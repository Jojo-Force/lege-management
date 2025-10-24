import { useState } from 'react'
import Comp1 from "@/components/Comp1"
import Comp2 from "@/components/Comp2"

import { UpOutlined } from '@ant-design/icons';
import { Button } from 'antd';


function App() {
  const [count, setCount] = useState(0)

  return (
      <div className="App">
        顶级组件
        <Comp1/>
        <Comp2/>
        <Button type="primary">Primary Button</Button>
        <UpOutlined style={{ fontSize:'10px',color:'red'}}/>
      </div>
  )
}

export default App
