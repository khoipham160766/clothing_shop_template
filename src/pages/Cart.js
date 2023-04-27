import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import { useState } from "react";
import {cart} from "../data";
import Color from '../components/Color';
import {GrClose} from "react-icons/gr";

const Cart = () => {
  const [quantity, setQuantity] = useState(1)
  const handleQuantity = (e) => {
    setQuantity(e.target.value)
  }
  const data_breadcrumb = [
    {
      title: "Trang chủ",
      link: "/",
      class: ""
    },
    {
      title: "Sản phẩm",
      link: "/cart",
      class: "link-breadcrumb-active"
    }
  ]
  return (
    <>
      <BreadCrumb data={data_breadcrumb} />
      <Container propsclass='cart-wrapper home-wrapper-2 py-5 pt-2'>
        <div className="row">
          <div className="col-12">
            <div className="cart-header py-3 d-flex justify-content-between align-content-center">
              <h4 className="cart-col-1">Chọn</h4>
              <h4 className="cart-col-2">Sản phẩm</h4>
              <h4 className="cart-col-3">Giá</h4>
              <h4 className="cart-col-4">Số lượng</h4>
              <h4 className="cart-col-5">Tổng tiền</h4>
            </div>
            {
              cart?.map((item,index)=>(
                <div className="cart-data mb-2 py-3 d-flex justify-content-between align-items-center" key={index}>
                  <div className="cart-col-1 d-flex align-items-center mx-2 form-check">
                    <input type="checkbox" className="form-check-input" />
                    <b>Fashion Shop</b>
                    <GrClose />
                  </div>
                  <div className="gap-15 cart-col-2 d-flex align-items-center">
                      <div className="w-25">
                          <img src={item.main_image} className="img-fluid" alt="" />
                      </div>
                      <div className="w-75">
                          <h5 className="title">{item.name}</h5>
                          <div className="color d-flex"><p>Màu:</p> <Color arrcolor={['#000000']} /> </div>
                          <p className="size">Kích cỡ: L</p>
                          <input type="number" className="number-mb" value={quantity} onChange={handleQuantity} max={10} min={1} />
                      </div>
                  </div>
                  <div className="cart-col-3">
                      <h5 className="price">
                        {` ${item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} đ`}
                      </h5>
                  </div>
                  <div className="cart-col-4 d-flex align-items-center gap-15">
                      <div>
                          <input
                              type="number"
                              className="form-control"
                              name=""
                              id=""
                              value={quantity}
                              onChange={handleQuantity}
                              max={10}
                              min={1}
                          />
                      </div>
                      <div>
                          <AiFillDelete className="text-danger fs-5" />
                      </div>
                  </div>
                  <div className="cart-col-5">
                      <h5 className="price">
                        {` ${item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} đ`}
                      </h5>
                  </div>
                </div>  
              ))
            }
          </div>
          <div className="cart-bottom col-12 py-2 mt-2">
              <div className="d-flex justify-content-between align-items-baseline">
                  <Link to='/ourstore' className='button-black'>Tiếp tục mua sắm</Link>
                  <div className="d-flex align-items-end flex-column">
                      <h4>Tổng tiền: 63.000đ</h4>
                      <p>Tiền vận chuyển sẽ được tính khi thanh toán</p>
                      <Link to='/checkout' className="button-black">Thanh toán</Link>
                  </div>
              </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Cart;
