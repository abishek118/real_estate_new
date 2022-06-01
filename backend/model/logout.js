import React,{useEffect} from 'react';
import { NavLink,useLocation } from 'react-router-dom'
export default function Header() {
  const location =useLocation()
  useEffect(() => {
    console.log(location)
   }, [location])
  let user=localStorage.getItem('token')
function logout(){
  localStorage.setItem('token',"")
}
  return <div className='navbar'>
      <nav className='navs'>
          <h1 className='logo'>Real-Estate</h1>
          <ul className='nav-list'>
          <NavLink className={`li ${location.pathname==="/"? "active":""}`} to={"/"} >home</NavLink>
          <NavLink className={`li ${location.pathname==="/"? "active":""}`} to={"/"} >flat</NavLink>
        <NavLink  className={`li ${location.pathname==="/"? "active":""}`} to={"/"}  >Plot</NavLink>
        {!user?
        <NavLink  className='btn li' to={"/"}>Sign In</NavLink>:
        <NavLink  className='btn li' to={"/"} onClick={logout}>Logout</NavLink>}
          </ul>
      </nav>
  </div>;
}