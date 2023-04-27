import React from 'react'
import ProductCard from './ProductCard';
import { useLocation } from 'react-router-dom';
import { products } from '../data';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
import {BsFillCaretRightFill} from 'react-icons/bs';
import { Link } from 'react-router-dom';

const PopularWrapper = ({breakpoints_data}) => {
  let location = useLocation();
  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  }
  return (
    <>
        <div className='col-12 bg-white mb-4 col-heading'>
            <label className='section-heading'>{ location.pathname.includes("product")?`Sản phẩm tương tự`:`Sản phẩm phổ biến` }</label>
            <Link to="/ourstore" className="text-align-end" onClick={handleScrollToTop}>Xem thêm <BsFillCaretRightFill className="fs-7" /></Link>
        </div>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
          autoplay={true}
          breakpoints={breakpoints_data}
        >
          {products?.map((item, index) => (
            <SwiperSlide key={index}>
              <ProductCard grid={12} item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
    </>
  )
}

export default PopularWrapper;