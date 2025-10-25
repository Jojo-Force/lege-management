import style from './login.module.scss'
import initLoginBg from './init.ts'
import { useEffect } from 'react'
import { Button, Input,Space } from 'antd';
import './login.less'
const View = () => {

    // 加载完这个组件之后，加载背景
    useEffect(()=>{
        initLoginBg();
        window.onresize= function(){initLoginBg()};
    },[])

    return (
        <div className={style.loginPage}>
            {/* 存放背景 */}
            <canvas id="bg-canvas" style={{display:"block"}}></canvas>
            {/* 登录盒子 */}
            <div className={style.loginBox+ " loginbox"}>
                {/* 标题部分 */}
                <div className={style.title}>
                    <h1>前端乐哥&nbsp; &nbsp;通用后台系统</h1>
                    <p>Strive Everyday</p>
                </div>

                {/* 表单部分 */}
                <div className='form'>
                    <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                    <Input placeholder="用户名" />
                    <Input.Password placeholder="密码" />
                    <Button type="primary" block>登录</Button>
                    </Space>
                </div>
            </div>

        </div>
    )
}

export default View