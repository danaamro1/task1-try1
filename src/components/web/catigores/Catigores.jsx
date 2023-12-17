import axios from 'axios';
import { useQuery } from 'react-query';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './Catigores.css';
import { Navigation, Pagination, Scrollbar,Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from 'react-router-dom';



export default function Catigores() {

  const getCatigores =async()=>{
    const {data}= await axios.get(`${import.meta.env.VITE_API_URL}/categories`);
    return data;
  }

   const{data,isLoading}= useQuery('web_categories',getCatigores);
   if(isLoading){
    return <p>...loding</p>
   }
 

  return (

    <div className='container'>

       <Swiper
    modules={[Navigation, Pagination,Autoplay]}

    spaceBetween={50}
    slidesPerView={3.5}
    navigation
    loop={true}
    Autoplay={{
      delay:3000
    }

    }


    
    pagination={{ clickable: true ,
    el:'.swiper-custom-pagination'}}
   // onSlideChange={() => console.log('slide change')}
    //onSwiper={(swiper) => console.log(swiper)}
  >
     {data?.categories.length?data?.categories.map((category)=>
    <SwiperSlide key={category._id}>
      <Link to={`/product/category/${category._id}`}>

      
      <div className='category'>

        <img className='rounded-circle' src={category.image.secure_url}/> 
    <h2 className='fs-5'>{category.name}</h2>
      </div>
      </Link>
    </SwiperSlide>
     ):<h2>swiper not found </h2>}
     
    
  

 
   </Swiper> 
     <div className='swiper-custom-pagination'></div>
    </div>
   
  
  )
}
