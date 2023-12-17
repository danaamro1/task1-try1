import React, { useContext } from 'react'
import { useQuery } from "react-query";
import { UserContext, UserContextProvider } from '../context/User';
import style from './Profile.module.css';
import { Link, Outlet } from 'react-router-dom';
export default function Prof() {
  

  const {userData,loading} =useContext(UserContext);
  if(loading){
    return <p> ...loading </p>
  }
       //  console.log(userData);
  //  console.log("doooooooooooooooooooo"); 
  return (
   // <h2>prof</h2>



<>






 <aside  className={`${style.profile}`}>
    <div className={`${style.profillink}`}>
<nav>
    <Link to='info'>info</Link>
    <Link to='contact'>contact</Link>
</nav>

</div>
<div className={`${style.userData}`}>


    <Outlet/>
    




</div>



    </aside>
   
</>
   




  )
}
