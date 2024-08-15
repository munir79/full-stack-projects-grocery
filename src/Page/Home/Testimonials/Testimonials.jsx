import { useEffect, useState } from "react";
import SectionTittle from "../../../Component/SectionTittle/SectionTittle";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';


const Testimonials = () => {
    const [review,setReview]=useState([]);
    useEffect(()=>{
        fetch('reviews.json')
        .then(res=>res.json())
        .then(data=>setReview(data))
    },[])
    return (
        <section>
            <SectionTittle subHeading={"what our Client say"} heading={'tesyimonial'}></SectionTittle>
            <div>
          
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    review.map(rev=><SwiperSlide key={rev._id}>


                        <div className="p-6 text-center justify-center items-center ">
                            <p className="m-4">{rev.details} </p>
                            <h3 className="text-4xl text-orange-500">{rev.name} </h3>
                        </div>
                    </SwiperSlide>)
                }
        
      </Swiper>
                
            </div>
        </section>
    );
};

export default Testimonials;