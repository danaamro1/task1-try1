import React, { useContext } from 'react'
import Input from '../../pages/Input.jsx';
import { useFormik } from 'formik';
import {  LoginSchema  } from '../validation/validate.js';
import axios from 'axios';
import {toast } from 'react-toastify';
import { Navigate, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/User.jsx';
import { Navigation } from 'swiper/modules';
import {Link} from 'react-router-dom'
import Sendcode from '../auth/Sendcode.jsx';




export default function Login( ) {

  const {userToken,setUserToken} =useContext(UserContext);
 const Navigate=useNavigate();
  if(userToken){
    Navigate(-1);
  }



   

    const  initialValues={
    
        email:'',
        password:'',
    

    };
    const onSubmit=async users=>{
     
      const{data} =await axios.post(`https://ecommerce-node4.vercel.app/auth/signin`,users);
    // console.log(data);
      
      if(data.message=='success'){
        localStorage.setItem("userToken",data.token);
        setUserToken(data.token);
       
        Navigate('/home');
        toast.success('Login success', {
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

 
    }

   const handelFieldChange =(event)=>{
    formik.setFieldValue('image',event.target.files[0]);
   }

    const formik=useFormik(
        {
            initialValues,
            onSubmit,
            validationSchema: LoginSchema 

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
<h2>Login </h2>
    <form onSubmit={formik.handleSubmit} >

   {renderInputs}  
   <button type='submit' disabled={!formik.isValid}>Login</button>
   <Link to='/Sendcode'>Reset password</Link>

    </form>

    </div>
    

    
    </>
    
  )
}
