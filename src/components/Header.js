import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { AiOutlineBars, AiOutlineMenu } from "react-icons/ai";
import { type } from "../data";

const Header = () => {
  const [menuMobile, setMenuMobile] = useState(false);
  const handleMenuMobile = () => {
    setMenuMobile(!menuMobile)
  }
  console.log(menuMobile)
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-7">
              <p className="text-white mb-0">
                Free ship cho hóa đơn hơn 200.000đ
              </p>
            </div>
            <div className="col-5">
              <p className="text-white text-end mb-0">
                Hotline: (+084) 0794 667 091
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-12 col-lg-2 col-xl-2 part-1">
              <h2>
                <Link className="text-white" to="/">
                  <img src="./images/clothing-shop/main-logo.png" alt=""  className="img-fluid image-logo"/>
                </Link>
              </h2>
            </div>
            <div className="col-12 col-md-5 col-lg-4 col-xl-5">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-2 input-search-header"
                  placeholder="Tìm kiếm sản phẩm ở đây ..."
                  aria-label="Tìm kiếm sản phẩm ở đây ..."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text" id="basic-addon2">
                  <BsSearch className="fs-6" />
                </span>
              </div>
            </div>
            <div className="col-12 col-md-7 col-lg-6 col-xl-5 part-3">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <Link to="/compare-product" className="d-flex align-items-center gap-10 text-white">
                    <img src="./images/compare.svg" alt="" />
                    <p className="mb-0">
                      So sánh
                    </p>
                  </Link>
                </div>
                <div>
                  <Link to="/wishlist" className="d-flex align-items-center gap-10 text-white">
                    <img src="./images/wishlist.svg" alt="" />
                    <p className="mb-0">
                      Sản phẩm <br /> yêu thích
                    </p>
                  </Link>
                </div>
                <div>
                  <Link to="/cart" className="d-flex align-items-center gap-10 text-white">
                    <img src="./images/cart.svg" alt="" />
                    <div className="d-flex flex-column gap-10">
                      <span className="badge bg-white text-dark" style={{width: "30px"}}>1</span>
                      <p className="mb-0">63.000đ</p>
                    </div>
                  </Link>
                </div>
                <div className="class-log-reg position-relative">
                  <div className=" d-flex align-items-center gap-10 text-white">
                    <img src="./images/user.svg" alt="" />
                    <p className="mb-0">
                      Tài khoản
                    </p>
                  </div>
                  <div className="form-log-reg"> 
                    <ul>
                      <li><Link to="/login">Đăng nhập</Link></li>
                      <li><Link to="/register">Đăng ký</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="menu-bottom-mobile position-relative">
                <div>
                  <AiOutlineMenu className="fs-2 ms-3" onClick={handleMenuMobile} />
                </div>
                <div className={ `menu-mobile position-absolute ${menuMobile?`show-menu-mobile`:''}` }>
                  <ul>
                    <li><Link to="/" onClick={handleMenuMobile}>Trang chủ</Link></li>
                    <li>
                      <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed btn-collapse" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                              SẢN PHẨM
                            </button>
                          </h2>
                          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                             <ul>
                              <li><Link to="/ourstore" onClick={handleMenuMobile}>TẤT CẢ</Link></li>
                              <li><Link to="/ourstore" onClick={handleMenuMobile}>T-SHIRT</Link></li>
                              <li><Link to="/ourstore" onClick={handleMenuMobile}>SHIRT</Link></li>
                              <li><Link to="/ourstore" onClick={handleMenuMobile}>SWEATER</Link></li>
                              <li><Link to="/ourstore" onClick={handleMenuMobile}>HOODIE</Link></li>
                             </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li><Link to="/blogs" onClick={handleMenuMobile}>Blogs</Link></li>
                    <li><Link to="/contact" onClick={handleMenuMobile}>Liên hệ</Link></li>
                    <li><Link to="/cart" onClick={handleMenuMobile}>Giỏ hàng</Link></li>
                    <li><Link to="/compare-product" onClick={handleMenuMobile}>So sánh sản phẩm</Link></li>
                    <li><Link to="/wishlist" onClick={handleMenuMobile}>Sản phẩm yêu thích</Link></li>
                    <li><Link to="/login" onClick={handleMenuMobile}>Đăng nhập</Link></li>
                    <li><Link to="/register" onClick={handleMenuMobile}>Đăng ký</Link></li>
                  </ul>
                </div>
            </div>
            <div className="col-12 menu-bottom-normal">
              <div className="menu-bottom d-flex align-items-center gap-30">
                <div>
                  <div className="dropdown">
                    <button
                      className="btn-categories btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <AiOutlineBars className="fs-5" />
                      <span className="me-5 inline-block">Danh mục sản phẩm</span>
                    </button>
                    <ul className="dropdown-menu">
                      {
                        type?.map((item,index)=>(
                          <li key={index}>
                            <Link className="dropdown-item" to="/ourstore">
                              {item.title}
                            </Link>
                          </li>
                        ))
                      }
                    </ul>
                  </div>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15">
                    <NavLink to="" className={({isActive})=>isActive?`link-active`:null}>Trang chủ</NavLink>
                    <NavLink to="/ourstore" className={({isActive})=>isActive?`link-active`:null}>Sản phẩm</NavLink>
                    <NavLink to="/blogs" className={({isActive})=>isActive?`link-active`:null}>Blogs</NavLink>
                    <NavLink to="/contact" className={({isActive})=>isActive?`link-active`:null}>Liên hệ</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
