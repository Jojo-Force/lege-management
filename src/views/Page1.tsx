import {useSelector} from "react-redux"

const View = () =>{
    const {num} = useSelector((state)=>({
        num:state.num
    }))

    return(
        <div className="about">
            <p>这是Page1页面内容</p>
            <p>{num}</p>
        </div>
    )
}

export default View