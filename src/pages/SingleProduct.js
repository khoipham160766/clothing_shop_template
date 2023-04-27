import React, { useState } from 'react'
import BreadCrumb from "../components/BreadCrumb";
import PopularWrapper from '../components/PopularWrapper';
import ReactStars from "react-rating-stars-component";
import InfoDetailProduct from '../components/InfoDetailProduct';
import Container from '../components/Container';
import { useParams } from 'react-router-dom';
import { products } from '../data';
import { useEffect } from 'react';


const SingleProduct = () => {
    const config_screen_swiper = {
        0: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        480: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 15,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 15,
        },
        1280: {
            slidesPerView: 6,
            spaceBetween: 15,
        },
    }
    const {id} = useParams();
    const [detail, setDetail] = useState([]);
    const orderedProduct = true;
    const data_breadcrumb = [
        {
          title: "Trang chủ",
          link: "/",
          class: ""
        },
        {
          title: "Sản phẩm",
          link: "/ourstore",
          class: ""
        },
        {
            title: "Chi tiết sản phẩm",
            link: `/product/${id}`,
            class: "link-breadcrumb-active"
          },
      ]
    useEffect(()=>{
        const getDetail = () => {
            products?.map(item=>(
                (`${item.id}` === id)?setDetail(item):null
            ))
        }
        getDetail();
    },[id]) 
  return (
    <>

        <BreadCrumb data={data_breadcrumb} />
        <Container propsclass='main-product-wrapper py-2 home-wrapper-2'>
            <div className='row'>
                <InfoDetailProduct detail={detail} />
            </div>
        </Container>
        <Container propsclass='description-wrapper py-1 home-wrapper-2'>
            <div className='row'>
                <div className='col-12'>
                    <h4>Mô tả</h4>
                    <p className='bg-white p-4 text-justify'>
                        {
                            detail.description?detail.description:null
                        }
                    </p>
                </div>
            </div>
        </Container>
        <Container propsclass='reviews-wrapper home-wrapper-2'>
            <div className='row'>
                <h4 id="review">Bình luận</h4>
                <div className='col-12'>
                    <div className='review-inner-wrapper'>
                        <div className='review-head d-flex justify-content-between align-items-end'>
                            <div>
                                <h4 className='mb-2'>Khách hàng bình luận</h4>
                                <div className='d-flex align-items-center gap-10'>
                                    <ReactStars
                                        count={5}
                                        size={24}
                                        isHalf={true}
                                        value={3.5}
                                        edit={false}
                                        emptyIcon={<i className="far fa-star"></i>}
                                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                                        fullIcon={<i className="fa fa-star"></i>}
                                        activeColor="#ffd700"
                                    />
                                    <p className='mb-0'>Có 1 bình luận</p>
                                </div>
                            </div>
                            {
                                orderedProduct && (
                                    <div>
                                        <a href='/write-review'>Viết bình luận</a>
                                    </div>
                                )
                            }
                        </div>
                        <div className='review-form py-3'>
                            <h4>Viết bình luận</h4>
                            <form action="" className="d-flex flex-column gap-15">
                                <div>
                                    <ReactStars
                                        count={5}
                                        size={24}
                                        isHalf={true}
                                        emptyIcon={<i className="far fa-star"></i>}
                                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                                        fullIcon={<i className="fa fa-star"></i>}
                                        activeColor="#ffd700"
                                    />
                                </div>
                                <div>
                                    <textarea
                                        name=""
                                        id=""
                                        className="w-100 form-control"
                                        cols="30"
                                        rows="4"
                                        placeholder="Bình luận"
                                    ></textarea>
                                </div>
                                <div className='d-flex justify-content-end'>
                                    <button className="button-black">Gửi bình luận</button>
                                </div>
                            </form>
                        </div>
                        <div className='reviews mt-4'>
                            <div className='review'>
                                <div className='d-flex align-items-center'>
                                    <h6 className='mb-0 me-2'>Tùng Tưng Tửng</h6>
                                    <ReactStars
                                        count={5}
                                        size={24}
                                        isHalf={true}
                                        edit={false}
                                        value={3.5}
                                        emptyIcon={<i className="far fa-star"></i>}
                                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                                        fullIcon={<i className="fa fa-star"></i>}
                                        activeColor="#ffd700"
                                    />
                                </div>
                                <p className='mt-2'>
                                    Áo đẹp, giao nhanh, đáng mua.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
        <Container propsclass="popular-wrapper py-5 home-wrapper-2">
            <div className="row">
                <PopularWrapper breakpoints_data={config_screen_swiper}/>
            </div>
        </Container>
    </>
  )
}

export default SingleProduct;