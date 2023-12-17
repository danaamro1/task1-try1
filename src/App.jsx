import { RouterProvider} from "react-router-dom";
import { CartContext, CartContextProvider } from "./components/web/context/Cart.jsx";
import { UserContext, UserContextProvider } from "./components/web/context/User.jsx";
import {router} from './components/layout/routes.jsx';
import { useContext, useEffect } from "react";



export default function App() {
  let {setUserToken}=useContext(UserContext);

  let{count,getcount,getCartContext,setCount}= useContext(CartContext);

  useEffect(()=>{
    if(localStorage.getItem("userToken")!=null){
      setUserToken(localStorage.getItem("userToken"));
      setCount(getCartContext().count);
    }
  },[])



  return (
   
   
   
     

       <RouterProvider router={router} />
  
    
   
   
  )
}
