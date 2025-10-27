import style from './login.module.scss'
import initLoginBg from './init.ts'
import { useEffect, useState, type ChangeEvent } from 'react'
import { Button, Input,Space } from 'antd';
import './login.less'
const View = () => {

    // 加载完这个组件之后，加载背景
    useEffect(()=>{
        initLoginBg();
        window.onresize= function(){initLoginBg()};
    },[])

    //获取用户输入的信息
    const [usernameVal,setUsernameVal] = useState("");//定义用户名信息变量
    const [passwordVal,setPasswordVal] = useState("");//定义密码信息变量
    const [captchVal,setCaptchVal] = useState("");//定义密码信息变量
    const usernameChange = (e:ChangeEvent<HTMLInputElement>)=>{
        //console.log(e.target.value)
        setUsernameVal(e.target.value);
    }

    const passwordChange = (e:ChangeEvent<HTMLInputElement>)=>{
        //console.log(e.target.value)
        setPasswordVal(e.target.value);
    }

    const captchChange = (e:ChangeEvent<HTMLInputElement>)=>{
        //console.log(e.target.value)
        setCaptchVal(e.target.value);
    }

    const goLogin = () =>{
        console.log("用户输入的用户名，密码，验证码分别是：",usernameVal,passwordVal,captchVal)
    }
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
                    <Input placeholder="用户名" onChange={usernameChange}/>
                    <Input.Password placeholder="密码" onChange={passwordChange}/>
                    <div className={style.captchaBox}>
                        <Input placeholder="验证码" onChange={captchChange}/>
                        <div className={style.captchaImg}>
                            <img height="38px" src="https://www.cwagi.com/common/sec/captcha" alt="" />
                        </div>
                    </div>
                    <Button type="primary" className="loginBtn" block onClick={goLogin}>登录</Button>
                    </Space>
                </div>
            </div>

        </div>
    )
}

export default View