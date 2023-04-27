import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper";

const Banner = () => {
  return (
    <>
        <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            autoplay={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
            className="mySwiper"
        >
            <SwiperSlide>
                <img src="./images/clothing-shop/banner-1.webp" className='img-fluid w-100 image-banner' alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="./images/clothing-shop/banner-2.webp" className='img-fluid w-100 image-banner' alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="./images/clothing-shop/banner-3.webp" className='img-fluid w-100 image-banner' alt="" />
            </SwiperSlide>
        </Swiper>
    </>
  )
}

export default Banner;