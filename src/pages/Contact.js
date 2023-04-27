import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall, BiInfoCircle } from "react-icons/bi";
import Container from "../components/Container";

const Contact = () => {
  const data_breadcrumb = [
    {
      title: "Trang chủ",
      link: "/",
      class: ""
    },
    {
      title: "Liên hệ",
      link: "/contact",
      class: "link-breadcrumb-active"
    }
  ]
  return (
    <>
      <BreadCrumb data={data_breadcrumb} />
      <Container propsclass=''>
        <div className="row">
          <div className="col-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1103.5942370834766!2d106.62204572324801!3d10.843263551097854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1zMDMgTMO0IEc2IMSQxrDhu51uZyBEQ1Q4IFBoxrDhu51uZyBUw6JuIEjGsG5nIFRodeG6rW4gUXXhuq1uIDEy!5e0!3m2!1svi!2s!4v1680488874762!5m2!1svi!2s"
              width="600"
              height="450"
              className="border-0 w-100"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="map"
            ></iframe>
          </div>
          <div className="col-12 mt-5">
            <div className="row contact-inner-wrapper d-flex justify-content-between">
              <div className="col-12 col-md-6 col-lg-6 col-xl-6 mb-3">
                <h3 className="contact-title mb-4">Phản hồi</h3>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Họ và tên"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Số điện thoại"
                    />
                  </div>
                  <div>
                    <textarea
                      name=""
                      id=""
                      className="w-100 form-control"
                      cols="30"
                      rows="4"
                      placeholder="Nội dung phản hồi"
                    ></textarea>
                  </div>
                  <div>
                    <button className="button-black border-0">Xác nhận</button>
                  </div>
                </form>
              </div>
              <div className="col-12 col-md-5 col-lg-4 col-xl-4">
                <h3 className="contact-title mb-4">Liên lạc với chúng tôi</h3>
                <ul className="ps-0">
                  <li className="mb-3 d-flex gap-15 align-items-center">
                    <AiOutlineHome className="fs-5" />
                    <address className="mb-0">03 Lo G6 DCT 8</address>
                  </li>
                  <li className="mb-3 d-flex gap-15 align-items-center">
                    <BiPhoneCall className="fs-5" />
                    <a href="tel:+84 0794667091">(+084) 0794 667 091</a>
                  </li>
                  <li className="mb-3 d-flex gap-15 align-items-center">
                    <AiOutlineMail className="fs-5" />
                    <a href="mailto:khoipham160701@gmail.com">khoipham160701@gmail.com</a>
                  </li>
                  <li className="mb-3 d-flex gap-15 align-items-center">
                    <BiInfoCircle className="fs-5" />
                    <p className="mb-0">Thứ 2 - Thứ 6 10AM - 8PM</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Contact;
