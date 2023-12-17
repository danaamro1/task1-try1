import { Children, createContext, useState } from "react";
import axios from "axios";
import {toast } from 'react-toastify';



export const CartContext=createContext(null);

export function  CartContextProvider({children}){

    let[count,setCount]=useState(0);

    const getCartContext=async ()=>{
        try{
            const token =localStorage.getItem("userToken");
             const{data}= await axios.get(`${import.meta.env.VITE_API_URL}/cart`,
             {headers:{Authorization:`Tariq__${token}`}})
             setCount(data.count);
            // console.log(data.count);
          //   return data;


        }catch(error){
           // console.log(error);

        }
    }

    const addToCartContext =async(productId)=>{
        try{
            
            const token =localStorage.getItem("userToken");
           // console.log(token);
            const{data}= await axios.post(`${import.meta.env.VITE_API_URL}/cart`,
            {productId},
            {headers:{Authorization:`Tariq__${token}`}})

            if(data.message=='success'){
                toast.success('prosuct added succesfully' , {
                    position: "top-center",
                    autoClose: false,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    });
            }
            setCount(++count);
          //  console.log(data);
            return data;
        }
        catch(error){
           // console.log(error)

        }
    }


    

    const removeCartContext=async(productId)=>{
        try{

            const token=localStorage.getItem("userToken");
            const{data}= await axios.patch(`${import.meta.env.VITE_API_URL}/cart/removeItem`,{productId}
                       , {headers:{Authorization:`Tariq__${token}`}})
            return data;




        }catch(error){
            console.log("error");

        }
    }




    return < CartContext.Provider value={{addToCartContext,getCartContext,removeCartContext,count,setCount }}>
        {children}
    </CartContext.Provider>;
}