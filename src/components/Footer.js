import React from 'react';
import { Link } from 'react-router-dom';
import { BsGithub, BsYoutube, BsInstagram } from 'react-icons/bs';
import {FaFacebookSquare} from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row align-items-center '>
            <div className='col-12 col-md-5 mb-2 text-center'>
              <div className='footer-top-data d-flex gap-30 align-items-center'>
                <img src='./images/newsletter.png' alt="" />
                <h2 className='mb-0 text-white fs-4'>Đăng ký để nhận tin mới</h2>
              </div>
            </div>
            <div className='col-12 col-md-7'>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-2 input-register-mail"
                  placeholder="Nhập email của bạn ..."
                  aria-label="Nhập email của bạn ..."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text py-2 input-register-mail" id="basic-addon2">
                  Đăng ký
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-6 col-md-4 col-lg-3 contact-us'>
              <h4 className='text-white mb-3 fs-4'>Liên hệ với chúng tôi</h4>
              <div>
                <address className='text-white fs-6'>
                  Địa chỉ: 03 Lo G6 DCT 8 <br />
                  PinCode: 100000
                </address>
                <a href='tel: +84 0794667091' className='mt-2 d-block mb-1 text-white'>
                  (+084) 0794 667 091
                </a>
                <a href='mailto:ecommerceweb@gmail.com' className='mt-1 d-block mb-0 text-white'>
                  ecommerceweb@gmail.com
                </a>
                <div className='social-icons d-flex align-items-center gap-30 mt-4'>
                  <a href='https://www.google.com/' className='text-white' data-bs-toggle="tooltip" data-bs-placement="bottom" title="Facebook">
                    <FaFacebookSquare className='fs-3 icon-fb' />
                  </a>
                  <a href='https://www.google.com/' className='text-white' data-bs-toggle="tooltip" data-bs-placement="bottom" title="Instagram">
                    <BsInstagram className='fs-4 icon-ig' />
                  </a>
                  <a href='https://www.google.com/' className='text-white' data-bs-toggle="tooltip" data-bs-placement="bottom" title="Github">
                    <BsGithub className='fs-4 icon-git' />
                  </a>
                  <a href='https://www.google.com/' className='text-white' data-bs-toggle="tooltip" data-bs-placement="bottom" title="Youtube">
                    <BsYoutube className='fs-3 icon-ytb' />
                  </a>
                </div>
              </div>
            </div>
            <div className='col-6 col-md-4 col-lg-3 information'>
              <h4 className='text-white mb-2 fs-4'>Thông tin</h4>
              <div className='footer-links d-flex flex-column'>
                <Link to="/privacy-policy" className='text-white py-1 mb-1'>Chính sách bảo mật</Link>
                <Link to="/refund-policy" className='text-white py-1 mb-1'>Chính sách đổi trả</Link>
                <Link to="/shipping-policy" className='text-white py-1 mb-1'>Chính sách vận chuyển</Link>
                <Link to="/term-and-condition" className='text-white py-1 mb-1'>Điều khoản</Link>
                <Link to="/blogs" className='text-white py-1 mb-1'>Blogs</Link>
              </div>
            </div>
            <div className='col-6 col-md-4 col-lg-3 account'>
              <h4 className='text-white mb-2'>Tài khoản</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className='text-white py-1 mb-1'>Về chúng tôi</Link>
                <Link className='text-white py-1 mb-1'>FAQs</Link>
                <Link className='text-white py-1 mb-1'>Liên hệ</Link>
              </div>
            </div>
            <div className='col-6 col-md-4 col-lg-3 quick-link'>
              <h4 className='text-white mb-2 fs-4'>Liên kết nhanh</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className='text-white py-1 mb-1'>T-Shirt</Link>
                <Link className='text-white py-1 mb-1'>Shirt</Link>
                <Link className='text-white py-1 mb-1'>Sweater</Link>
                <Link className='text-white py-1 mb-1'>Hoodie</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer;