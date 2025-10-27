import {useDispatch, useSelector} from "react-redux"

console.log()
// TS提供了ReturnType，用来获取函数类型的返回值
const View = () =>{
    //获取仓库数据
    const {num} = useSelector((state:RootState)=>({
        num:state.num
    }))

    const dispatch = useDispatch()
    //修改仓库数据
    const changeNum = ()=>{
        //dispatch({type:"字符串（记号）",val:3})//
        //dispatch({type:"add1"})
        dispatch({type:"add1",val:5})
    }
    const changeNum2 = ()=>{
        //dispatch({type:"字符串（记号）",val:3})//
        //dispatch({type:"add1"})
        dispatch({type:"add2",val:5})
    }
    return(
        <div className="about">
            <p>这是Page1页面内容</p>
            <p>{num}</p>
            <button onClick={changeNum}>按钮</button>
            <button onClick={changeNum2}>按钮</button>
        </div>
    )
}

export default View