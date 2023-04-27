import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import Color from "./Color";
import { TbGitCompare } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";

const InfoDetailProduct = ({detail})=> {
  const type = ["T-Shirt","Shirt","Sweater","Hoodie"];
  const [quantity, setQuantity] = useState(1)
  const handleQuantity = (e) => {
    setQuantity(e.target.value)
  }
  return (
    <>
      <div className="col-12 col-lg-6">
        <div className="row px-3">
          <div className="main-product-image col-sm-6 col-lg-12">
            <div>
              <img src={detail.main_image?detail.main_image:null} className="img-fluid" alt="" />
            </div>
          </div>
          <div className="other-product-images d-flex flex-wrap col-sm-6 col-lg-12">
            <div className="d-flex flex-wrap">
              {
                detail.other_image?
                detail.other_image.map((item,index)=>(
                <div key={index} className="col-6">
                  <div>
                    <img className="img-fluid" src={item} alt="" />
                  </div>
                </div>
                )):null
              }
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-6 mt-2">
        <div className="main-product-details">
          <div className="border-bottom">
            <h3 className="title">
              {detail.name?detail.name:null}
            </h3>
          </div>
          <div className="border-bottom py-3">
            <p className="price">
              {detail.price?` ${detail.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} đ`:null}
            </p>
            <div className="d-flex align-items-center gap-10">
              <ReactStars
                count={5}
                size={24}
                isHalf={true}
                value={detail.rate?detail.rate:0}
                edit={false}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#ffd700"
              />
              <p className="mb-0 t-review">( 2 Bình luận )</p>
            </div>
            <a href="#review" className="review-btn">
              Viết bình luận
            </a>
          </div>
          <div className="border-bottom py-3">
            <div className="d-flex gap-10 align-items-center my-2">
              <h3 className="product-heading">Loại: </h3>
              <p className="mb-0 product-data">{detail.type?type[detail.type - 1]:null}</p>
            </div>
            <div className="d-flex gap-10 align-items-center my-2">
              <h3 className="product-heading">Thương hiệu: </h3>
              <p className="mb-0 product-data">{detail.brand?detail.brand:null}</p>
            </div>
            <div className="d-flex gap-10 align-items-center my-2">
              <h3 className="product-heading">Danh mục: </h3>
              <p className="mb-0 product-data">{detail.type?type[detail.type - 1]:null}</p>
            </div>
            <div className="d-flex gap-10 align-items-center my-2">
              <h3 className="product-heading">Tags: </h3>
              <p className="mb-0 product-data">{detail.tag?detail.tag:null}</p>
            </div>
            <div className="d-flex gap-10 align-items-center my-2">
              <h3 className="product-heading">Khả dụng: </h3>
              <p className="mb-0 product-data">Còn hàng</p>
            </div>
            <div className="d-flex flex-column gap-10 my-2 mb-3">
              <h3 className="product-heading">Kích cỡ: </h3>
              <div className="size d-flex flex-wrap gap-15">
              {
                detail.size?
                detail.size.map((item,index)=>(
                  <span className="badge border border-1 bg-white text-dark border-secondary" key={index}>
                    {item}
                  </span>
                )):null
              }
              </div>
            </div>
            <div className="d-flex flex-column gap-10 my-2">
              <h3 className="product-heading">Màu sắc: </h3>
              <Color arrcolor={detail.color?detail.color:null}/>
            </div>
            <div className="d-flex flex-column gap-10 my-2">
              <h3 className="product-heading">Số lượng: </h3>
              <div className="">
                <input
                  type="number"
                  name=""
                  className="form-control"
                  style={{ width: "70px" }}
                  value={quantity}
                  onChange={handleQuantity}
                  max={10}
                  min={1}
                />
                <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                  <button className="button button-black">Thêm vào giỏ hàng</button>
                  <button className="button">
                    Mua ngay
                  </button>
                </div>
              </div>
            </div>
            <div className="d-flex mt-4 align-items-center gap-15">
              <div>
                <p className="mb-0 p-compare">
                  <TbGitCompare className="fs-5 mx-1" />
                  Thêm vào so sánh
                </p>
              </div>
              <div>
                <p className="mb-0 p-wishlist">
                  <AiOutlineHeart className="fs-5 mx-1" />
                  Thêm vào danh sách yêu thích
                </p>
              </div>
            </div>
          </div>
          <div className="info-product">
            <div className="d-flex flex-column gap-10 my-2">
              <h3 className="product-heading">Materials: </h3>
                <p className="mb-0 product-data">
                  Hợp kim nhựa kim loại các kiểu.
                </p>
            </div>
            <div className="d-flex flex-column gap-10 my-2">
              <h3 className="product-heading mt-2">Shipping: </h3>
              <div>
                <p className="mb-0 product-data">
                  Trong phạm vi thành phố từ 12.000đ - 20.000đ. <br />
                  Các khu vực khác giao động từ 25.000đ - 40.000đ.
                </p>
              </div>
            </div>
            <div className="d-flex flex-column gap-10 my-2">
              <h3 className="product-heading mt-2">Thông số kĩ thuật: </h3>
              <div>
                <p className="mb-0 product-data">
                  
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoDetailProduct;
