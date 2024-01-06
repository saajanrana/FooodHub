import {createSlice} from '@reduxjs/toolkit';
const storeSlice = createSlice ({
    name:"store",
    initialState:{
        totalitem:[],
        Addtocart:[]
    },
    reducers:{
        addfood:(state,action)=>{
            action.payload;
            state.totalitem.push(action.payload);
          
        },
        removefood:(state,action)=>{

            
            // console.log(">>>",action.payload);
            // if(state.totalitem > 1){
            //     state.totalitem = state.totalitem - action.payload;
            // }
        },
        additemtocart:(state,action)=>{
            const cartitem = action.payload;
            const cartitemid = cartitem.userfood.id;
                  // Check if the item with the same ID already exists
            const isItemAlreadyInCart = state.Addtocart.some(item => item.userfood.id === cartitemid);
            // If it doesn't exist, add it to the cart
            if (!isItemAlreadyInCart) {
              state.Addtocart.push(action.payload);
              state.totalitem.push(cartitemid);
            }
            else{
                 state.totalitem.push(cartitemid);
                
            }
        },
        removeitemformcart:(state,action)=>{
           
             const itemIdToRemove = action.payload;
            
             state.Addtocart = state.Addtocart.filter(item => item.userfood.id !== itemIdToRemove);
        }
    }
});


export const {addfood,removefood,additemtocart,removeitemformcart} = storeSlice.actions;
export default storeSlice.reducer;