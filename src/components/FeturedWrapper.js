import React from "react";
import ProductCard from "./ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
import { products } from "../data";
import { Link } from "react-router-dom";
import {BsFillCaretRightFill} from 'react-icons/bs'

const FeturedWrapper = ({breakpoints_data}) => {
  console.log(products)
  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  }
  return (
    <>
      <div className="col-12 bg-white mb-4 col-heading">
        <label className="section-heading">Sản phẩm nổi bật</label>
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
  );
};

export default FeturedWrapper;
