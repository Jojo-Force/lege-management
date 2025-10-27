import style from './login.module.scss'
import initLoginBg from './init.ts'
import { useEffect, useState, type ChangeEvent } from 'react'
import { Button, Input, Space,message } from 'antd';
import './login.less'
import {useNavigate} from "react-router-dom"
import { CaptchaAPI,LoginAPI } from '@/request/api';

const View = () => {
    let navigateTo = useNavigate();
    // 加载完这个组件之后，加载背景
    useEffect(()=>{
        initLoginBg();
        window.onresize= function(){initLoginBg()};
        getCaptchaImg();
    },[])

    //获取用户输入的信息
    const [usernameVal,setUsernameVal] = useState("");//定义用户名信息变量
    const [passwordVal,setPasswordVal] = useState("");//定义密码信息变量
    const [captchVal,setCaptchVal] = useState("");//定义密码信息变量

    const [captchaImg,setCaptchImg] = useState("");

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

    const goLogin = async () =>{
        console.log("用户输入的用户名，密码，验证码分别是：",usernameVal,passwordVal,captchVal)
        //验证是否有空值
        if(!usernameVal.trim() || !passwordVal.trim() || !captchVal.trim()){
            alert("请完整输入信息!")
            return 
        }

        let loginAPIRes = await LoginAPI({
            username:usernameVal,
            password:passwordVal,
            code:captchVal,
            uuid:localStorage.getItem("uuid") as string
        })

        console.log(loginAPIRes)
        if(loginAPIRes.code === 200){
            //1.提示登录成功
            message.success('登录成功! ')
            //2.保存token
            localStorage.setItem("lege-react-management-token",loginAPIRes.token)
            //3.跳转到/page1
            navigateTo("/page1")
            //4.删除本地保存中的uuid
            localStorage.removeItem("uuid")
        }
    }

    const getCaptchaImg = async ()=>{
        // captchaAPI().then((res)=>{
        //     console.log(res);
        // })
        let capthaAPIRes = await CaptchaAPI();
        console.log(capthaAPIRes)
        if(capthaAPIRes.code === 200){
            setCaptchImg("data:imgae/gif;base64,"+capthaAPIRes.img)
            localStorage.setItem("uuid",capthaAPIRes.uuid)
        }
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
                        <div className={style.captchaImg} onClick={getCaptchaImg}>
                            <img height="38px" src={captchaImg} alt="" />
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