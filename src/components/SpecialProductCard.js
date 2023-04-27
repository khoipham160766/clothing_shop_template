import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';

const SpecialProductCard = (props) => {
  return (
    <>
        <div className='col-12 col-md-6 col-lg-4 mb-4'>
            <div className='special-product-card postion-relative'>
                {
                    (props.data.sale === 0)?null:
                    <div className='sale-special-card position-absolute'>
                        <h5 className='mb-0'>-{props.data.sale}%</h5>
                    </div>
                }
              <div className='d-flex'>
                <div className='image-special-product'>
                  <img src={props.data.main_image} className='img-fluid w-100' alt="" />
                </div>
                <div className='special-product-content'>
                  <h5 className='brand'>{props.data.brand}</h5>
                  <h6 className='title'>
                    {props.data.name}
                  </h6>
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
                    classNames="swipper-custom"
                  />
                  {
                        (props.data.sale === 0)?
                            <p className='price mb-0'>
                                {` ${props.data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} đ`}
                            </p>
                        :
                            <div className='d-flex align-items-center'>
                                <p className='mb-0 sale-price'>
                                    {` ${(props.data.price/100*(100-props.data.sale)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} đ ` }
                                </p>
                                <p className='mb-0 normal-price mx-2'>
                                    {` ${props.data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} đ`}
                                </p>
                            </div>
                    }
                  <div className='discount-till d-flex align-items-center gap-10 mt-1'>
                    <div className='d-flex gap-10 align-items-center'>
                        <span className='hour'>00</span>:
                        <span className='minute'>00</span>:
                        <span className='second'>00</span>
                    </div>
                  </div>
                  <div className='prod-count my-1'>
                    <p className='mb-0'>Còn lại: 5 sản phẩm</p>
                  </div>
                  <Link className='button'>Thêm vào giỏ hàng</Link>
                </div>
              </div>
            </div>
        </div>
    </>
  )
}

export default SpecialProductCard;