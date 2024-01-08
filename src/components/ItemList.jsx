import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
const ItemList=({items})=>{
    // console.log(items);
const dispatch= useDispatch();
    const handleAddItem=(item)=>{
      //dispatch an action
       dispatch(addItem(item));
       console.log(item);
    }
   return(
    //  <p>{items[0].card.info.name}</p>
    <div>
        {items.map((item) => (
            <div key={items?.card?.info?.id} 
            className="p-2 m-2 border-gray border-b-2 text-left flex">
              <div className="w-9/12">
                 <div className="py-2 font-semibold">
                  <span className="">{item?.card?.info?.name}</span>
                  <span className=""> - ₹{(item?.card?.info?.defaultPrice)/100}</span>
                   </div>
                  <div>
                    <p className="text-gray-400 text-sm p-3">{item?.card?.info?.description}</p>
                  </div>
              </div>
               <div className="w-3/12 items-center">
               <div className="absolute">
                <button className="items-center w-20 mx-10 my-20 bg-white shadow-md font-medium 
                m-auto hover:shadow-lg" onClick={()=>handleAddItem(item)}>ADD +</button>
                </div>
                <img className="" src={CDN_URL + item?.card?.info?.imageId} alt="" />
               </div>
             </div>
        ))}
    </div>
   )
}
export default ItemList;