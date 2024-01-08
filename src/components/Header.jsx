import { useContext, useEffect, useState } from 'react';
import {LOGO_URL} from '../utils/constants'
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';
import { useDispatch, useSelector } from 'react-redux';
import { getCartTotal } from '../utils/cartSlice';

const Header = () => {
const [loginBtn,setLoginBtn]=useState("Login");
const onlineStatus = useOnlineStatus();
//  const data= useContext(UserContext);
//  console.log(data);

const {LoggedInUser}= useContext(UserContext);
const {items,totalQuantity}=useSelector((state)=> state.cart);
//console.log(totalQuantity);


const dispatch=useDispatch();
useEffect(()=>{
  dispatch(getCartTotal())
},[items])

//subscribing to the store using a selector
// const cartItems =useSelector((store)=> store.cart.items);
// console.log(cartItems);

    return (
      <div className="flex justify-between shadow-lg">
        <div className="logo-container">
          <img
            className="w-20"
            src= {LOGO_URL}
            alt="food"
          />
        </div>
        <div className="items">
          <ul className="flex items-center gap-5 p-6">
            <li className='item'>Online Status: {onlineStatus ? "✅" : "🔴"}
            </li>
            <li className="item">
              <Link to="/">Home</Link>
              </li>
            <li className="item">
              <a href='/about'>About</a>
              </li>
            {/* <li className="item">
              <Link to='/contact'>Contact</Link>
              </li> */}
            {/* <li className="item">
             <Link to='/'>{LoggedInUser}</Link>
            </li> */}
            {/* <li className="item">
             <Link to='/grocery'>Grocery</Link>
            </li> */}
            <li className="item">
             <Link to='/cart'>Cart ({totalQuantity})</Link>
            </li>
            <button className='login-btn' onClick={()=> loginBtn === "Login" ?
              setLoginBtn("LogOut") : 
              setLoginBtn("Login")
              }>{loginBtn}</button>
    {/* when we click on button whole header component will be re-rendered. */}
          </ul>
        </div>
      </div>
    );
  };
  export default Header;