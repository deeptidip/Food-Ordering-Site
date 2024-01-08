import { useState } from "react";
const UserFunc=({name, location})=>{
    const [count]=useState(0);


  return (
      <div className="user-card">
        <h1>Count={count}</h1>
      <div>Name: {name}</div>
      <div>Location:{location}</div>
      <div>This is namaste React Series</div>
      </div> 
  )
}

export default UserFunc;