import React, { useContext } from 'react'
import { UserContext } from '../context/User';
import style from './Profile.module.css';



export default function Usercontact() {
const {userData,loading} =useContext(UserContext);
    if(loading){
        return <p> ...loading </p>
      }
  return (
    <div>

        <h2>{userData.email}</h2>
         <p>{userData.phone}</p>



    </div>
  )
}
