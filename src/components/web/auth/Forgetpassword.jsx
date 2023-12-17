import React from 'react'
import Input from '../../pages/Input.jsx';
import { useFormik } from 'formik';
import { ForgetpasswordSchema, registerSchema } from '../validation/validate.js';
import axios from 'axios';
import {toast } from 'react-toastify';
import { Navigation } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';



export default function Forgetpassword() {
 const navigate=useNavigate();
    const  initialValues={
       
        email:'',
        password:'',
       code:'',

    };

   
   
   
    const onSubmit=async(users)=>{
    
      const{data} =await axios.patch(`${import.meta.env.VITE_API_URL}/auth/forgotPassword`,users);
    
      
      if(data.message=='success'){
      console.log(data);
            toast.success('password updated ', {
                position: "top-center",
                autoClose: false,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
               navigate('/login');
        
      }

 //console.log(data);
    }

   

    const formik=useFormik(
        {
            initialValues,
            onSubmit,
            validationSchema:ForgetpasswordSchema

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
{

    id:'password',
    type:'password',
    name:'password',
    title:'user password',
    value:formik.values.password,

   
},


{

    id:'code',
    type:'text',
    name:'code',
    title:'code',
    value:formik.values.code,

   
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
     onChange={input.onChange|| formik.handleChange}
     onBlur={formik.handleBlur}
     touched={formik.touched}

     />

    )



  return (
    <>
    
    <div className='container'>
<h2>updatpassword </h2>
    <form onSubmit={formik.handleSubmit} encType="multipart/form-data">

   {renderInputs}  
   <button type='submit' disabled={!formik.isValid}>Reg</button>

    </form>

    </div>
    

    
    </>
    
  )
}
