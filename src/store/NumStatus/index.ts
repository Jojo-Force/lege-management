const store={
    state:{
        num:20
    },
    actions:{
        add1(newState:{num:number},action:{type:string}){
            newState.num++
        },
        add2(newState:{num:number},action:{type:string,val:number}){
            newState.num+=action.val
        }
    },

    actionNames:{}
}

let actionNames = {}

//遍历store.actions
for(let key in store.actions){
    actionNames[key] = key;
}

store.actionNames=actionNames;
// 我们现在想做到actionNames自动生成：
export default store