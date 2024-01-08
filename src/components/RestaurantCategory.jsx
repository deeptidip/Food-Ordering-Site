import React, { useState } from 'react'
import ItemList from './ItemList';

const RestaurantCategory = ({Data, showItems, setShowIndex}) => {
  //console.log(Data);
//  const[showItems, setShowItems]=useState(false);

   const handleClick=()=>{
       setShowIndex();
  }
  return (
   <div>
      {/* header */}
      <div className='w-6/12 bg-gray-50 mx-auto my-4 shadow-lg p-4'>
        <div className="flex justify-between cursor-pointer" 
        onClick={handleClick}
        >
        <span className='font-bold text-lg'>
            {Data?.title} ({Data.itemCards.length})</span>
        <span>⬇️</span>
        </div>
            {/* accordion body */}
        {showItems && <ItemList items={Data.itemCards} />}
        </div>
        </div>
  )
}

export default RestaurantCategory;
