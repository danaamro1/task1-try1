import axios from 'axios';
import React from 'react'
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom'

export default function CategDetles() {
    const {cat_id}=useParams();

    const getCategoresDetels=async()=>{

        const{data}=await axios.get(`${import.meta.env.VITE_API_URL}/products/category/${cat_id}`);
        return data.products;
      // return data;
     
    }

const {data,isLoding}= useQuery('category_detls',getCategoresDetels);
 //console.log(data);
if(isLoding){
    return <p>loding.......</p>
}


   
  return (
  <div className='products'>
    {data?.length?data.map((product)=>
        <div className='product' key={product._id}>
            <img src={product.mainImage.secure_url}/>
            <h2>{product.name}</h2>
             <Link to={`/product/${product._id}`}> details </Link>
    
            </div>
        ):<h2> product not found </h2>}
       
   </div>
// <h2> loooooooooooooooooooooo</h2>
  )
}
