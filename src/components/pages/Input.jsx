import React from 'react'


export default function Input({type='text',touched,onBlur,id,name,title,value,onChange,errors}) {
 // console.log(errors);
    return (
   <>
   <div className="input-group mb-3 d-flex">
<label htmlFor={id}>{title}</label>
   <input type={type} className="form-control" value={value} name={name} onChange={onChange} onBlur={onBlur} id={id}/> 
   {touched[name]&&errors[name]&&<p className='text text-danger'>{errors[name]}</p>}
   <p> </p>

   </div>
   
   </>
  )
}
