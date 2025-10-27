import {legacy_createStore} from "redux"
import reducer from "./reducer.ts"

// 创建数据仓库
// window.__REDUX_DEVTOOLS_EXTENSION__  ： 支持Redux_Tools插件能观察状态的变化
const store = legacy_createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store