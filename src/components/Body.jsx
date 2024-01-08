import Card, {withPromotionCard} from "./Card";
import {useContext, useEffect, useState} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import data from "../utils/RestaurantData";
import useOnlineStatus from '../utils/useOnlineStatus'
import UserContext from "../utils/UserContext";

const Body = () => {
const [listOfRes, setListOfRes]= useState([]);
const [searchVal,setSearchVal]= useState("");
const [filteredRestaurant, setFilteredRestaurant]=useState([]);
const {LoggedInUser, setUserName}=useContext(UserContext);

const RestaurantCardOpen = withPromotionCard(Card);

//this callback func of useEffect will be called after component renders..(i.e body here)
useEffect(()=>{
      // console.log("Useeffect called");
      fetchData()
},[]);

const fetchData= async ()=>{
      // const data= await fetch(
      //   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      // );
  //  const json=await data.json();
  //console.log(data);
  //console.log(data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
  // console.log(json);
  //console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
  // setListOfRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  // setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  console.log(listOfRes);
  setListOfRes(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  setFilteredRestaurant(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      }

//console.log("Body rendered");
// & hence O/P: Body rendered (first printed) n then "Useeffect called" is printed.

// const TopRestaurant=()=>{
//    const filteredList=listOfRes.filter((items)=>
//        Number(items?.info?.avgRating) > 4.5
//    )
//    setFilteredRestaurant(filteredList)
// }

//conditional rendering....
// if(listOfRes.length === 0){
//   // return <h1>Loading......</h1>
//   return <Shimmer/>
// }
const onlineStatus= useOnlineStatus();

if(onlineStatus === false) return (
  <h1>Looks like you are offline, check your internet connection!!!</h1>
)

    return listOfRes.length === 0 ?
     <Shimmer/> : (
      <>
      <div className="body flex justify-center gap-4">
         <div className="search pt-2.5">
            <input className="p-0 m-2 border border-solid border-black" type="text" name="search" 
            id="search-text" value={searchVal} onChange={(e)=> setSearchVal(e.target.value)}/>
            <button className="p-1 m-2 bg-orange-400 rounded-md font-si text-white" onClick={()=>{
                const filteredRes = listOfRes.filter((items)=>
                       items.info.name.toLowerCase().includes(searchVal.toLowerCase())
                 )
                 setFilteredRestaurant(filteredRes)
            }}>Search</button>
          </div> 
          <div>
          <button className="p-1 mt-4 bg-gray-600 rounded-md text-white" onClick={()=>{
               const topRated= listOfRes.filter((items)=>
                     Number(items?.info?.avgRating) > 4.5
               )
               setFilteredRestaurant(topRated)
          }}>Top Rated Restaurants</button>
          </div>

          {/* <div>
            <label>User: </label>
            <input className="border border-black" type="text" value={LoggedInUser}
             onChange={(e)=> setUserName(e.target.value)}/>
          </div> */}
        </div>
          <div className="flex flex-wrap">
          {filteredRestaurant.map((item) => (
            //console.log(item.info.id.toString())
          <Link to={"/restaurant/"+ item?.info?.id } 
          key={item?.info?.id}> 
          {/* if res is open then add a open label to it */}

         { item.info.isOpen ? (<RestaurantCardOpen Data={item}/> ) : ( <Card Data={item} /> )}
          </Link>
       ))}
        </div>
     </>
    )
  };
  export default Body;