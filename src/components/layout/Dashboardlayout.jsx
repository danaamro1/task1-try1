import React from 'react'
import Navbar from '../dashbord/navbar/Navbar'
import Footer from '../dashbord/footer/Footer'
import {Outlet} from 'react-router-dom'

export default function Dashboardlayout() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}
