import React from 'react'
import Navbar from '../web/navbar/Navbar'
import Footer from '../web/footer/Footer'
import {Outlet} from 'react-router-dom';
//النافبار ثابتة والفوتر والاوتلت حسب الباث الي بحطوو

export default function layout() {
  return (
    <>
    
     <Navbar />
     <Outlet/>
    <Footer/>
    </>
   
  )
}
