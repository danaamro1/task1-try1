import React, { useContext } from 'react'
import Input from '../../pages/Input.jsx';
import { useFormik } from 'formik';
import {  LoginSchema, SendSchema  } from '../validation/validate.js';
import axios from 'axios';
import {toast } from 'react-toastify';
import { Navigate, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/User.jsx';
import { Navigation } from 'swiper/modules';



export default function Sendcode( ) {

 const navigate=useNavigate();
 

    const  initialValues={
    
        email:'',
       
    

    };
    const onSubmit=async (users)=>{
     
      const{data} =await axios.patch(`https://ecommerce-node4.vercel.app/auth/sendcode`,users);
    // console.log(data);
      
      if(data.message=='success'){
       
       
        toast.success('input code', {
            position: "top-center",
            autoClose: false,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
          navigate('/forgotPassword');
        
      }

 
    }

   const handelFieldChange =(event)=>{
    formik.setFieldValue('image',event.target.files[0]);
   }

    const formik=useFormik(
        {
            initialValues,
            onSubmit,
            validationSchema: SendSchema

        }
    );

   // console.log(formik.values);

    const inputs=[


{
    id:'email',
    type:'email',
    title:'user email',
    name:'email',
    value:formik.values.email,

},




    ];

    const renderInputs = inputs.map((input,index)=>
    <Input
     type={input.type}
    id={input.id}
    value={input.value}
     name={input.name} 
    title={input.title}
     key={index}
     errors={formik.errors}
     onChange={ formik.handleChange}
     onBlur={formik.handleBlur}
     touched={formik.touched}

     />

    )



  return (
    <>
    
    <div className='container'>
<h2>Sendcode </h2>
    <form onSubmit={formik.handleSubmit} >

   {renderInputs}  
   <button type='submit' disabled={!formik.isValid}>Sendcode </button>

    </form>

    </div>
    

    
    </>
    
  )
}
