import { useDispatch, useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";
import {getCartTotal,removeItem,decreaseItemQuantity,increaseItemQuantity} from '../utils/cartSlice';
import { useEffect } from "react";

const Cart=()=>{
    const {items, totalQuantity, totalPrice}=useSelector((store)=> store.cart);

    const dispatch=useDispatch();
    const handleClearCart=()=>{
        dispatch(clearCart());
    }

   useEffect(()=>{
    dispatch(getCartTotal());
   }, [items])

    return(
       <div className="flex">
      <div className="w-8/12">
         <h1 className="text-2xl font-bold items-center m-2 p-4">Cart - {items.length} items</h1>
         <button className="p-1.5 ml-7 bg-gray-500 text-white rounded-lg"
          onClick={handleClearCart}>Clear Cart</button>
      {items.map((item) => (
          <div key={items?.card?.info?.id} 
          className="p-2 m-6 border-gray border-b-2 text-left flex justify-between">
            <div className="w-8/12">
               <div className="py-2 font-semibold flex">
                <div className="w-10">
               <img className="" src={CDN_URL + item?.card?.info?.imageId} alt="" />
               </div>
                <span className="">{item?.card?.info?.name}</span>
                <span className=""> - ₹{(item?.card?.info?.defaultPrice)/100}</span>
                 </div>
                <div>
                  <p className="text-gray-400 text-sm p-3 line-clamp-2 h-8">{item?.card?.info?.description}</p>
                </div>
            </div>
             <div className=" items-center flex float-start w-3/12">
              {/* <button className="p-2 border border-black" onClick={()=> 
                dispatch(decreaseItemQuantity(item?.card?.info?.id))}>-</button> */}
              <p className="p-2 border border-black">Quantity: {item?.card?.info?.quantity}</p>

              {/* <button className="p-2 border border-black" onClick={()=> 
                dispatch(increaseItemQuantity(item?.card?.info?.id))}>+</button> */}
              <div className="pl-4 cursor-pointer">
                <button onClick={()=> dispatch(removeItem(item.card.info.id))}>❌</button>
                </div>
              </div>
           </div>
      ))}
  </div>

  <div className="bg-slate-200 w-6/12">
         <h1 className="text-2xl font-bold m-4 p-4">Summary</h1>
         <p className="border border-b-1 border-gray-400"></p>
         <div className="m-6 p-6">
          <div className="flex justify-between p-2">
         <h2>Total quantity</h2>
         <strong>{totalQuantity}</strong>
         </div>
         <div className="flex justify-between p-2">
          <h2>Total Price</h2>
          <strong>{totalPrice}</strong>
          </div>
          <button className="w-full bg-blue-500 p-2 m-5 rounded-md text-white">GO TO CHECKOUT</button>
         </div>
  </div>
  </div>
    )
}
export default Cart;