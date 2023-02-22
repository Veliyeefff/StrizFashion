import { createSlice } from "@reduxjs/toolkit";

const initialState={
    value:[],
    count:0
}

const basketSlice  = createSlice({
    name:"basket",
    initialState,
    reducers:{
        addBasket:(state,actions)=>{
            if(state.value.find(x=> x.data._id===actions.payload._id)){
                state.value.forEach(elem=>{
                    if(elem.data._id===actions.payload._id){
                        elem.counter+=1
                    }
                })
                state.count+=1
            }else{
                state.count+=1
            }
            state.value.push({counter:1,data:actions.payload})

        },
        deleteFromBasket:(state,actions)=>{
            state.value = state.value.filter(x=> x.data._id!==actions.payload._id)
        },
        increase:(state,actions)=>{
            if(state.value.find(x=> x.data._id===actions.payload._id)){
                state.value.forEach(elem=>{
                    if(elem.data._id===actions.payload._id){
                        elem.counter+=1
                    }
                })
                state.count+=1
            }
        },
        decrease:(state,actions)=>{
            if(state.value.find(x=> x.data._id===actions.payload._id)){
                state.value.forEach(elem=>{
                    if(elem.data.id===actions.payload.id){
                        elem.counter-=1
                    }
                })
                state.count-=1
            }
        }
    }
})

export const {addBasket,increase,decrease,deleteFromBasket} = basketSlice.actions
export default basketSlice.reducer