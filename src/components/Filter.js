import React from "react";
import ReactStars from "react-rating-stars-component";
import Color from "./Color";
import { type } from "../data";
import { sizes } from "../data";
import { colors } from "../data";
import { tags } from "../data";
import { products } from "../data";

const Filter = ({handleFilter}) => {
  const new_product = products.slice(2,4);
  return (
    <>
      <div className="filter-card mb-1 pb-1">
        <h3 className="filter-title mb-1">Danh mục</h3>
        <div className="mt-2">
            {type?.map((item, index) => (
              <div className="form-check" key={index}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id=""
                />
                <label htmlFor="" className="form-check-label">
                  {item.title}
                </label>
              </div>
            ))}
        </div>
      </div>
      <div className="filter-card pb-2">
        <h3 className="filter-title">Tìm theo</h3>
        <div>
          <h5 className="sub-title">Khả dụng</h5>
          <div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id=""
              />
              <label htmlFor="" className="form-check-label">
                Còn hàng (7)
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id=""
              />
              <label htmlFor="" className="form-check-label">
                Hết hàng (0)
              </label>
            </div>
          </div>
          <h5 className="sub-title">Giá</h5>
          <div className="d-flex align-items-center gap-10">
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder=""
              />
              <label htmlFor="floatingInput">Từ</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingInput1"
                placeholder=""
              />
              <label htmlFor="floatingInput1">Đến</label>
            </div>
          </div>
          <h5 className="sub-title">Màu</h5>
          <div>
            <Color arrcolor={colors}/>
          </div>
          <h5 className="sub-title">Kích cỡ</h5>
          <div>
            {
              sizes?.map((item,index)=>(
                <div className="form-check" key={index}>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="size-s"
                  />
                  <label htmlFor="size-s" className="form-check-label">
                    {item} (2)
                  </label>
                </div>
              ))
            }
          </div>
        </div>
      </div>
      <div className="filter-card mb-3 pb-3 tags">
        <h3 className="filter-title">Tags</h3>
        <div className="product-tags d-flex flex-wrap align-items-center gap-10">
          {
            tags?.map((item,index)=>(
              <span className="badge bg-light text-secondary rounded-3 py-2 px-3" key={index}>
                {item}
              </span>
            ))
          }
        </div>
      </div>
      <div className="text-center filter-card mb-2">
        <button className="button-black mb-2" onClick={handleFilter}>Tìm kiếm</button>
      </div>
      <div className="filter-card card-product-random">
        <h3 className="filter-title">Sản phẩm ngẫu nhiên</h3>
        <div>
          {
            new_product?.map((item,index)=>(
              <div className="random-products d-flex mb-3 row" key={index}>
                <div className="col-5">
                  <img src={item.main_image} className="img-fluid" alt="" />
                </div>
                <div className="col-7">
                  <h5>{item.name}</h5>
                  <ReactStars
                    count={5}
                    size={24}
                    isHalf={true}
                    value={item.rate}
                    edit={false}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                  <b>{` ${item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} đ`}</b>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  );
};

export default Filter;
