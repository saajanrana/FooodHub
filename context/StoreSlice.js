import {createSlice} from '@reduxjs/toolkit';
const storeSlice = createSlice ({
    name:"store",
    initialState:{
        totalitem:0,

    },
    reducers:{
        addfood:(state,action)=>{
            action.payload;
    
              state.totalitem = state.totalitem + 1; 
        },
        removefood:(state,action)=>{
            console.log(">>>",action.payload);
            if(state.totalitem >= 1){
                state.totalitem = state.totalitem - action.payload; 
            }
        }
    }
});


export const {addfood,removefood} = storeSlice.actions;
export default storeSlice.reducer;