import axios from 'axios';
import { useContext } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom'
import { CartContext } from '../context/Cart';

export default function Product() {
    const {productId}=useParams();
const {addToCartContext}=useContext(CartContext);

    const addToCart =async(productId)=>{
        const res =await addToCartContext(productId);
       // console.log(res);
    }


    

   




    const getProduct=async()=>{

        const{data}=await axios.get(`${import.meta.env.VITE_API_URL}/products/${productId}`);
        return data.product;
     // return data;
    //   console.log(data);
     
    }

const {data,isLoding}= useQuery('product',getProduct);
 //console.log(data);
if(isLoding){
    return <p>loding.......</p>
}


   
  return (
  <div className='product'>
    <div className='containar'>
        <div className='row'>

            <div className='col-lg-4'>
         <h2>{data?.name} </h2>
          <p>{data?.price}</p>
          <button className=' btn btn-outline-info' onClick={()=>addToCart(data._id)}>Add to cart </button>

            </div>
        </div>
    </div>
   
       
    
   </div>
// <h2> loooooooooooooooooooooo</h2>
  )
}
