import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { AiOutlineArrowRight } from "react-icons/ai";
import Container from "../components/Container";

const Checkout = () => {
  return (
    <>
      <BreadCrumb title="Checkout" />
      <Container propsclass='checkout-wrapper py-2 home-wrapper-2'>
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="checkout-left-data">
              <div className="w-100 mb-4">
                <div className="d-flex justify-content-between align-items-center">
                  <Link to="/cart" className="button-black">
                    <BiArrowBack className="me-2" />
                    Quay lại giỏ hàng
                  </Link>
                  <Link to="/cart" className="button-black">
                    Tiếp tục
                    <AiOutlineArrowRight className="ms-2" />
                  </Link>
                </div>
              </div>
              <h3 className="website-name">Fashion Shop</h3>
              <h4 className="title total">Thông tin liên lạc</h4>
              <p className="user-details">
                Khoi Pham (khoipham160701@gmail.com)
              </p>
              <h4 className="mb-3">Địa chỉ giao hàng</h4>
              <form
                action=""
                className="d-flex flex-wrap gap-15 justify-content-between"
              >
                <div className="w-100">
                  <select name="" className="form-control form-select" id="">
                    <option value="" selected disabled>
                      Chọn quốc gia
                    </option>
                  </select>
                </div>
                <div className="flex-grow-1">
                  <input
                    className="form-control"
                    placeholder="Họ và tên lót"
                    type="text"
                  />
                </div>
                <div className="flex-grow-1">
                  <input
                    className="form-control"
                    placeholder="Tên"
                    type="text"
                  />
                </div>
                <div className="w-100">
                  <input
                    className="form-control"
                    placeholder="Địa chỉ"
                    type="text"
                  />
                </div>
                <div className="w-100">
                  <input
                    className="form-control"
                    placeholder="Tỉnh"
                    type="text"
                  />
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="Thành phố"
                    className="form-control"
                  />
                </div>
                <div className="flex-grow-1">
                  <select name="" className="form-control form-select" id="">
                    <option value="" selected disabled>
                      Hình thức thanh toán
                    </option>
                  </select>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="Zipcode"
                    className="form-control"
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="border-bottom py-4">
              <div className="d-flex">
                <div className="w-75 d-flex gap-10">
                  <div className="w-25 position-relative">
                    <span
                      style={{ width:"25px", height:"25px", top: "-10px", right: "-5px" }}
                      className="badge bg-secondary text-white rounded-circle p-2 position-absolute"
                    >
                      1
                    </span>
                    <img
                      className="img-fluid bg-white"
                      src="../images/clothing-shop/1.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <h5 className="title total-price">Áo thun nam nữ unisex tay lỡ AR01</h5>
                    <p className="total-price">L / Đen</p>
                  </div>
                </div>
                <div className="flex-grow-1 d-flex justify-content-end">
                  <h5 className="total">63.000đ</h5>
                </div>
              </div>
            </div>
            <div className="border-bottom py-4">
              <div className="d-flex justify-content-between align-items-center">
                <p className="total">Tổng tiền sản phẩm</p>
                <p className="total-price">63.000đ</p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p className="mb-0 total">Phí vận chuyển</p>
                <p className="mb-0 total-price">21.000đ</p>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center border-bottom py-4">
              <h4 className="total">Tổng tiền</h4>
              <h5 className="total-price">84.000đ</h5>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Checkout;
