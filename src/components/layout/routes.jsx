import { createBrowserRouter} from "react-router-dom";
import Layout from "./Layout.jsx";
//import Catigores from "../web/catigores/Catigores.jsx";
import Catigores from "../web/catigores/Catigores.jsx";
//import Auth from "../web/protectedrout/Auth.jsx";

import Protectedrout from "../web/protectedrout/Protectedrout.jsx";

import HomeDashboard from '../dashbord/home/Home.jsx';
import Catigdashboard from '../dashbord/catigores/Catigores.jsx';
import Dashboardlayout from './Dashboardlayout.jsx';
import Home from "../web/home/Home.jsx";
import Register from "../web/register/Register.jsx";
import Login from "../web/Login/Login.jsx";

import Cart from "../web/cart/Cart.jsx";
import CategDetles from "../web/catigores/CategDetles.jsx";
import Product from "../web/product/Product.jsx";
import Prof from "../web/profile/Prof.jsx";
import Userinfo from "../web/profile/Userinfo.jsx";
import Usercontact from "../web/profile/Usercontact.jsx";
import Sendcode from "../web/auth/Sendcode.jsx";
import Forgetpassword from "../web/auth/Forgetpassword.jsx";

export  const router = createBrowserRouter([
    {
      path:'/',
      element:<Layout />,
      children:[
          {
            path:'register',
            element:<Register />
          },
          {
            path:'login',
            element:
       
               <Login />
           
            
           
          },
          {
            path:'Sendcode',
            element:
       
               <Sendcode/>
           
            
           
          },
          {
            path:'forgotPassword',
            element:
       
               <Forgetpassword/>
           
          },
          

          {
           index:true,
            element:<Home />
          },
          {
          
           
            
              path:'profile',
             
             element: < Protectedrout >
             <Prof />
             </Protectedrout>,


children:[
  {
    path:'',
    index:true,
    element:<Userinfo/>

  },
  {
    path:'contact',
    index:true,
    element:<Usercontact/>

  }


]
           },
          {
            path:'categories',
            element:< Catigores />
          },
          {
            path:'cart',
          
            element:< Protectedrout >
            <Cart />
            </Protectedrout>
          },
          {
            path:'/product/:productId',
            element:<Product/>
          },
          {
            path:'/product/category/:cat_id',
            element:<CategDetles/>
          },
          {
            path:'*',
            element:<h2>page not found --- web</h2>
          }
      ]
    },
    {
        path:'/dashboard',
        element:<Dashboardlayout/>,
        children:[{
        path:'home',
      //  element:<HomeDashboard />
      }
      ,{
        path:'categories',
       // element:<CategoriesDashboard />
      },
      {
        path:'*',
        element:<h2>page not found --- dashboard</h2>
      }
    ]
 
    }
  ]);



/*
export const router = createBrowserRouter([
  
    {
      path:"/",
      element: <Layout/>,
      children:[
        {
          path:"register",
          element:<Register/>

        },

        {
          path:"Login",
          element:<Login/>

        },
      
    {
      path:"home",
      element:<Home/>
    },
    {
      path:"categ",
      element:<Catigores/>
    },
    {
      path:"*",
      element:<h2> eroore in page 404</h2>
    }
  
  
  
      ]
    },
    {
      path:'/dashboard',
      element:<Dashboardlayout/>,
      children:[
        {
          path:'home',
          element:<HomeDashboard/>
        },
        {
          path:'catigores',
          element:<Catigdashboard/>
        },
        {
          path:"*",
          element:<h2> eroore in page dashboard 404</h2>
        }
      ]
  
    }
  ]);*/
  