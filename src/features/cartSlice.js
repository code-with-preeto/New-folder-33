// import { createSlice } from "@reduxjs/toolkit";
// import productData from '../productData'
//  const initialState = {
//     cart :[],
//     items :productData,
//     totalQuantity:0,
//     totalPrice:0
//  }
//  const cartSlice= createSlice({
//     name:"cart",
//     initialState,
//     reducers:{
//        addToCart:(state,action)=>{
//          let find= state.cart.findIndex((item)=>item.id===action.payload.id)
//          if(find>=0){
//             state.cart[find].quantity+=1;
//          }
//          else{
//             state.cart.push(action.payload);
//          }
//        },
//        getCartTotal:(state)=>{
//          let {totalQuantity,totalPrice}=state.cart.reduce((cartTotal,cartItem)=>{
//             console.log("cartTotal",cartTotal);
//             console.log("cartItem",cartItem);
//             const{price,quantity}=cartItem;
//             console.log(price,quantity)
//             const itemTotal=price*quantity;
//             cartTotal.totalPrice += itemTotal;
//             cartTotal.totalQuantity += quantity;
//             return cartTotal;
//          },
//          {
//             totalPrice:0,
//             totalQuantity:0, 
//          }
//       );
//       state.totalPrice =parseInt(totalPrice.toFixed(2));
//       state.totalQuantity = totalQuantity;
       
//     },
//     removeItem:(state,action)=>{
//       state.cart= state.cart.filter((item)=>item.id!==action.payload)
//     },
//     increaseItemQuantity:(state,action)=>{
//       state.cart=state.cart.map((item)=>{
//          if(item.id===action.payload){
//             return{...item,quantity:item.quantity+1};
//          }
//          return item;
//       })
//     },
//    decreaseItemQuantity:(state,action)=>{
//       state.cart=state.cart.map((item)=>{
//          if(item.id===action.payload){
//             return{...item,quantity:item.quantity-1};
//          }
//          return item;
//       })
//     }
//  },

// });


//  export default cartSlice.reducer;
//  export const{addToCart,getCartTotal,removeItem,increaseItemQuantity,decreaseItemQuantity}=cartSlice.actions;
import { createSlice } from "@reduxjs/toolkit";
import  Product from '../data'
 const initialState = {
    cart :[],
    items :Product,
    totalPrice:0
 }
 const cartSlice= createSlice({
    name:"cart",
    initialState,
    reducers:{
      addToCart:(state,action)=>{
         state.cart.push(action.payload);
         state.totalPrice += action.payload.price
        
      },
      clearCart:(state,action)=>{
         state.cart=[];
         state.totalPrice=0
      }
      
       },
   
 

});


 export default cartSlice.reducer;
 export const {addToCart,clearCart} = cartSlice.actions;
 
