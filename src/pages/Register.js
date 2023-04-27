import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import { Link } from "react-router-dom";
import Container from "../components/Container";

const Register = () => {
  const data_breadcrumb = [
    {
      title: "Trang chủ",
      link: "/",
      class: ""
    },
    {
      title: "Đăng ký",
      link: "/register",
      class: "link-breadcrumb-active"
    }
  ]
  return (
    <>
      <BreadCrumb data={data_breadcrumb} />
      <Container propsclass="login-wrapper py-2 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="login-card">
              <h3 className="text-center mb-3">Đăng ký</h3>
              <form action="" className="d-flex flex-column gap-15">
                <div className="user-box">
                  <input type="text" name="" required />
                  <label>Họ và tên</label>
                </div>
                <div className="user-box">
                  <input type="email" name="" required />
                  <label>Email</label>
                </div>
                <div className="user-box">
                  <input type="text" name="" required />
                  <label>Địa chỉ</label>
                </div>
                <div className="user-box">
                  <input type="tel" name="" required />
                  <label>Số điện thoại</label>
                </div>
                <div className="user-box">
                  <input type="password" name="" required />
                  <label>Mật khẩu</label>
                </div>
                <div className="user-box">
                  <input type="password" name="" required />
                  <label>Nhập lại mật khẩu</label>
                </div>
                <div>
                  <Link to="/login">
                    Nếu đã có tài khoản.{" "}
                    <p className="mb-0 text-primary">Đăng nhập ngay !</p>
                  </Link>
                </div>
                <div className="btn-animation text-center">
                    <Link>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Đăng ký
                    </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Register;
