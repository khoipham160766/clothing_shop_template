import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import { Link } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";
import Container from "../components/Container";

const SingleBlog = () => {
  return (
    <>
      <BreadCrumb title="Dynamic Blog Name" />
      <Container propsclass="blog-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="row">
              <div className="single-blog-card bg-white p-3">
                <Link to="/blogs" className="d-flex align-items-center gap-10">
                  <HiOutlineArrowLeft className="fs-4"/> Quay lại Blogs
                </Link>
                <h3 className="title">
                  Thời trang mùa hè
                </h3>
                <img
                  src="../images/clothing-shop/image-blog.png"
                  className="img-fluid w-100 my-1"
                  alt=""
                />
                <p>
                  Khôi đẹp trai Khôi đẹp trai Khôi đẹp trai Khôi đẹp trai Khôi
                  đẹp trai Khôi đẹp trai Khôi đẹp trai Khôi đẹp trai Khôi đẹp
                  trai Khôi đẹp trai Khôi đẹp trai Khôi đẹp trai Khôi đẹp trai
                  Khôi đẹp trai Khôi đẹp trai Khôi đẹp trai Khôi đẹp trai Khôi
                  đẹp trai Khôi đẹp trai Khôi đẹp trai
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SingleBlog;
