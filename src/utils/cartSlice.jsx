import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
     name : "cart",
     initialState: {      //object
        items:[],
        totalQuantity: 0,
        totalPrice: 0,
     },
     reducers:{            //object
           addItem: (state,action)=>{      //reducer function- here we modify the state(initial state) based on the action
             //mutatating the state here
             let find=state.items.findIndex((item)=> 
             item?.card?.info?.id === action.payload?.card?.info?.id);
             
             if(find>=0){
               state.items[find].card.info.quantity += 1 ;
             }else{
               state.items.push(action.payload);
             }
           },
           removeItem: (state,action)=>{
            state.items = state.items.filter((item)=> item?.card?.info?.id !==  action.payload);
           },
           clearCart: (state)=>{
              state.items.length = 0;
           },
           increaseItemQuantity: (state, action) => {
            state.items= state.items.map((item) => {
              if (item?.card?.info?.id === action.payload) {
                return { ...item, quantity : item?.card?.info?.quantity + 1 };
              }
              return item;
            });
          },
          decreaseItemQuantity: (state, action) => {
            state.items = state.items.map((item) => {
              if (item?.card?.info?.id  === action.payload) {
                return { ...item, quantity: item?.card?.info?.quantity - 1 };
              }
              return item;
            })
         },
           getCartTotal: (state)=>{
            let {totalQuantity, totalPrice} = state.items.reduce(
               (cartTotal,cartItem)=>{
                  const price= (cartItem?.card?.info?.defaultPrice)/100;
                const quantity=cartItem.card.info.quantity;
                 //console.log(cartItem?.card?.info?.quantity);
                  const itemTotal = price * quantity;
                  cartTotal.totalPrice +=itemTotal;
                  cartTotal.totalQuantity += quantity;
                  return cartTotal;
               },
               {
                  totalQuantity:0,
                  totalPrice:0,
               }
            )
            state.totalPrice= parseInt(totalPrice.toFixed(2));
            state.totalQuantity = totalQuantity;
          }
     }
    })
    export const {addItem,removeItem,clearCart,getCartTotal,decreaseItemQuantity,increaseItemQuantity}= cartSlice.actions;

    export default cartSlice.reducer;