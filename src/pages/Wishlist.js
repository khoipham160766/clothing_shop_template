import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import { wishlist } from "../data";

const Wishlist = () => {
  const data_breadcrumb = [
    {
      title: "Trang chủ",
      link: "/",
      class: ""
    },
    {
      title: "Sản phẩm yêu thích",
      link: "/wishlist",
      class: "link-breadcrumb-active"
    }
  ]
  return (
    <>
      <BreadCrumb data={data_breadcrumb} />
      <Container propsclass="wishlist-wrapper home-wrapper-2 py-2">
          <div className="row">
            {
                wishlist?.map((item,index)=>(
                    <div className="col-6 col-sm-4 col-lg-3" key={index}>
                        <div className="wishlist-card position-relative">
                            <img
                            src="../images/cross.svg"
                            alt="cross"
                            className="position-absolute cross img-fluid"
                            />
                            <div className="wishlist-card-image bg-white">
                                <img src={item.main_image} className="img-fluid w-100" alt="" />
                            </div>
                            <div className="bg-white py-3 px-3">
                                <h5 className="title">
                                    {item.name}
                                </h5>
                                <h6 className="price">{` ${item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} đ`}</h6>
                            </div>
                        </div>
                    </div>
                ))
            }
          </div>
      </Container>
    </>
  );
};

export default Wishlist;
