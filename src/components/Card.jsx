import { CDN_URL } from "../utils/constants";
import { useContext } from 'react';
import UserContext from "../utils/UserContext";
const Card = (props) => {
    const { Data } = props;
   
    
    // const { 
    //   cloudinaryImageId, 
    //   name, 
    //   costForTwo, 
    //   cuisines, 
    //   avgRating 
    // } = resData?.info;
    return (
      <div className="m-4 p-4 w-[200px] shadow-md rounded-lg bg-gray-100 hover:bg-gray-200">
        <div className="img-container">
          <img 
            className="rounded-lg"
            src={
              CDN_URL +
              Data?.info?.cloudinaryImageId
            }
            alt=""
          />
        </div>
        <div className="py-1">
          <h3 className="font-bold py-1 text-lg">{Data?.info?.name}</h3>
          <h4>{Data?.info?.costForTwo}</h4>
          <h4>{Data?.info?.cuisines.join(", ")}</h4>
          <h4>{Data?.info?.avgRating} stars</h4>
        </div>
      </div>
    );
  };

  //higher order component
   export const withPromotionCard = (Card)=>{  //takes a component as an argument
    return (props) =>{      //returns a new component
      return (         //returns jsx(which will be an enhanced version of component)
        <div>
          <label className="absolute bg-black text-white m-2 w-14 rounded-md ">OPEN</label>
          <Card {...props}/>
        </div>
      )
    }
   }
export default Card;