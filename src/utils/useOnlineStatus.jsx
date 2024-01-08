import { useEffect, useState} from "react";

const useOnlineStatus=()=>{
    const [useOnlineStatus,setOnlineStatus]=useState(true);
    //check if online
useEffect(()=>{
     window.addEventListener("online", ()=>{
        setOnlineStatus(false);
     })

     window.addEventListener("offline", ()=>{
        setOnlineStatus(true);
     })
},[])
    //return boolean
   return useOnlineStatus;

}

export default useOnlineStatus;