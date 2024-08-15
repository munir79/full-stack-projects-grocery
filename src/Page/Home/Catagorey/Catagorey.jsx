
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';
import slide1 from '../../../assets/home/slide1.jpg';
import slide2 from '../../../assets/home/slide2.jpg';
import slide3 from '../../../assets/home/slide3.jpg';
import slide4 from '../../../assets/home/slide4.jpg';
import slide5 from '../../../assets/home/slide4.jpg';
import SectionTittle from '../../../Component/SectionTittle/SectionTittle';

const Catagorey = () => {
    return (
        <>
        <SectionTittle heading={"from 10.00 am to 11.00 pm"} 
        subHeading={"order Online"}
        ></SectionTittle>
        <section>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={slide1} alt="" />
            <h2 className='text-4xl text-center uppercase text-white -mt-12'>salad</h2>
          </SwiperSlide>
          <SwiperSlide><img src={slide2} alt="" /></SwiperSlide>
          <SwiperSlide><img src={slide3} alt="" /></SwiperSlide>
          <SwiperSlide><img src={slide4} alt="" /></SwiperSlide>
          <SwiperSlide><img src={slide5} alt="" /></SwiperSlide>
         
        </Swiper>
        </section>
      </>
    );
};

export default Catagorey;