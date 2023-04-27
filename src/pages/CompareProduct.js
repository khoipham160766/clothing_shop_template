import React from 'react'
import BreadCrumb from "../components/BreadCrumb";
import Color from '../components/Color';
import Container from '../components/Container';
import { compare } from '../data';

const CompareProduct = () => {
    const type = ["T-Shirt","Shirt","Sweater","Hoodie"];
    const data_breadcrumb = [
        {
          title: "Trang chủ",
          link: "/",
          class: ""
        },
        {
          title: "So sánh",
          link: "/compare-product",
          class: "link-breadcrumb-active"
        }
      ]
  return (
    <>
        <BreadCrumb data={data_breadcrumb} />
        <Container propsclass='compare-product-wrapper py-2 home-wrapper-2'>
            <div className='row'>
                {
                    compare?.map((item,index)=>(
                        <div className='col-6 col-sm-4 col-md-3 col-lg-3' key={index}>
                            <div className='compare-product-card position-relative'>
                                <img className='position-absolute cross' src="../images/cross.svg" alt="" />
                                <div className='product-card-image'>
                                    <img src={item.main_image} className='img-fluid' alt="" />
                                </div>
                                <div className='compare-product-details'>
                                    <h5 className='title'>
                                        {item.name}
                                    </h5>
                                    <h6 className='price mb-3'>
                                        {` ${item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} đ`}
                                    </h6>
                                    <div>
                                        <div className='product-detail'>
                                            <h5>Hiệu:</h5>
                                            <p className='mb-0'>{item.brand}</p>
                                        </div>
                                        <div className='product-detail'>
                                            <h5>Loại:</h5>
                                            <p className='mb-0'>{item.type?type[item.type - 1]:null}</p>
                                        </div>
                                        <div className='product-detail'>
                                            <h5>Khả dụng:</h5>
                                            <p className='mb-0'>Còn hàng</p>
                                        </div>
                                        <div className='product-detail'>
                                            <h5>Màu:</h5>
                                            <Color arrcolor={item.color} />
                                        </div>
                                        <div className='product-detail'>
                                            <h5>Kích cỡ:</h5>
                                            <div className='d-flex gap-10'>
                                                {
                                                    item.size?.map((size,index)=>(
                                                        <p key={index} className='mb-0'>{size}</p>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </Container>
    </>
  )
}

export default CompareProduct;