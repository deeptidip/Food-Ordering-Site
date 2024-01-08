import Shimmer from "./Shimmer";
import React, { useState } from 'react'
//import { useParams } from "react-router-dom";
//import useRestaurantMenu from '../utils/useRestaurantMenu'
import RestaurantCategory from "./RestaurantCategory";
import menuDatas from "../utils/menuDatas";

const RestaurantMenu=()=>{

    //const {resId} = useParams();

    // const  resInfo = useRestaurantMenu(resId);
   const[showIndex,setShowIndex]=useState(0);

    // const {
    //     name
    // }= resInfo?.cards[0]?.card?.card?.info;
console.log(menuDatas.data.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
//const itemCards = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card.itemCards;
// console.log(resInfo.cards[5].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
//console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
//console.log(resInfo.cards[5].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards);
    if(menuDatas.data === null) return <Shimmer/>;

    const categories= menuDatas?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>
        c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        )
        console.log(categories);

    return (
        <>
            <div className="text-center">
         {/* <h1 className="">{menuDatas.data.cards[0]?.card?.card?.info?.name}</h1> */}
         <h1 className="font-bold text-2xl my-6">MENU:</h1>
         <p className="text-xl font-bold "> Specials - {menuDatas.data?.cards[0]?.card?.card?.info?.costForTwoMessage}</p>
        </div>
            {/* categories accordion */}

        {categories.map((category, index)=>(

            //controlled component
            <RestaurantCategory 
            key={category?.card?.card?.title} 
            Data={category.card.card}
            showItems={index === showIndex ? true : false}
            setShowIndex={()=> setShowIndex(index)}  
            />
        ))}
        </>
    )
}
export default RestaurantMenu;