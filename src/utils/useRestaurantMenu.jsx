import { useEffect, useState } from "react"
import { MENU_URL } from "../utils/constants";

const useRestaurantMenu=(resId)=>{
 const [resMenu,setResMenu]= useState(null);

  useEffect(()=>{
       fetchMenu()
    },[])


const fetchMenu= async()=>{
    try {
    const data= await  fetch(MENU_URL + resId);
    if (!data.ok) {
        throw new Error(`Failed to fetch: ${data.status} ${data.statusText}`);
    }

    const json = await data.json();
    console.log(json.data);
    setResMenu(json.data);
} catch (error) {
    console.error("Error fetching menu:", error);

// let existingData = json.data;

// let newData = { ...existingData, Quantity: 1 };

// console.log(newData);

    // const json= await data.json();
    // console.log(json.data);
    // setResMenu(json.data);
}
}
return resMenu;
}

export default useRestaurantMenu;