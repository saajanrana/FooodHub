import {createSlice} from '@reduxjs/toolkit';
const storeSlice = createSlice ({
    name:"store",
    initialState:{
        totalitem:{},
        Addtocart:[],
        totalprice:0,
    },
    reducers:{
        addfood:(state,action)=>{
         const itemId = action.payload;
      if (state.totalitem[itemId]) {

      
        state.totalitem[itemId]++;
      } else {
     
        state.totalitem[itemId] = 1;
      } 
        },
        removefood:(state,action)=>{
            const itemIdToRemove = action.payload;
            if (state.totalitem[itemIdToRemove]) {
                state.totalitem[itemIdToRemove]--;
                if (state.totalitem[itemIdToRemove] === 0) {
                  delete state.totalitem[itemIdToRemove];
                }
              }
        },
        additemtocart:(state,action)=>{
            const cartitem = action.payload;
            const cartitemid = cartitem.userfood.id;
                  // Check if the item with the same ID already exists
            const isItemAlreadyInCart = state.Addtocart.some(item => item.userfood.id === cartitemid);
            // If it doesn't exist, add it to the cart
            if (!isItemAlreadyInCart) {
              state.Addtocart.push(action.payload);
              if (state.totalitem[cartitemid]) {
                state.totalitem[cartitemid]++;
              } else {
                state.totalitem[cartitemid] = 1;
              }
            
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