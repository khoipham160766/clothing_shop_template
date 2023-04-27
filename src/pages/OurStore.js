import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Filter from "../components/Filter";
import ProductPage from "../components/ProductPage";
import Container from "../components/Container";
import { FiFilter } from "react-icons/fi";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const OurStore = () => {
  const [onFilter, setOnFilter] = useState(false);
  const handleFilter = () => {
    setOnFilter(!onFilter);
  };
  const data_breadcrumb = [
    {
      title: "Trang chủ",
      link: "/",
      class: ""
    },
    {
      title: "Sản phẩm",
      link: "/ourstore",
      class: "link-breadcrumb-active"
    }
  ]
  return (
    <>
      <BreadCrumb data={data_breadcrumb} />
      <Container propsclass="store-wrapper home-wrapper-2 py-3">
        <button className="button-black btn-filter" onClick={handleFilter}>
          <FiFilter className="fs-6 me-1"/>
          Lọc sản phẩm
        </button>
        <div className="row">
          <div className={`col-12 col-md-4 col-xl-3 filter ${(onFilter?`show-filter`:null)}`}>
            <div className="text-end">
              <AiOutlineClose className="fs-5 close-filter" onClick={handleFilter}/>
            </div>
            <Filter handleFilter={handleFilter} />
          </div>
          <div className="col-12 col-md-8 col-xl-9">
            <ProductPage />
          </div>
        </div>
      </Container>
    </>
  );
};

export default OurStore;
