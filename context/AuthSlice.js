import {createSlice} from '@reduxjs/toolkit';
const authSlice = createSlice ({
    name:"auth",
    initialState:{
       isLoggedIn:false,
       canbeinhome:false,
    },
    reducers:{
        loginUser:(state,action)=>{
             action.payload;

             if(action.payload ==='usercanlogin'){
                state.isLoggedIn = true;
             }

            
            //  if (
            //     state.user &&
            //     state.user.email === action.payload.email &&
            //     state.user.password === action.payload.password
            //   ) {
            //     state.isLoggedIn = true;
                
            //     console.log("You Can login");
               
            //   } else {
            //     state.isLoggedIn = false;
            //     state.loginError = "Incorrect Email or password"; // Set an error message
            //     console.log("data is not same");
            //   }
        },
        beinhome:(state,action)=>{
              action.payload;
              console.log("beinhome>>>",action.payload);
               if(action.payload==='true'){
                  console.log("inhome????");
                 state.canbeinhome = true;
               }
               console.log("hueeee>>>",state.canbeinhome);
            
        }
    }
});


export const {loginUser,beinhome} = authSlice.actions;
export default authSlice.reducer;