import React, { useState } from "react";
import ProductCard from './ProductCard';
import { products } from "../data";

const ProductPage = () => {
  const [grid, setGrid] = useState(3);
  console.log(grid);
  return (
    <>
      <div className="filter-sort-grid mb-4">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center gap-10">
            <p className="mb-0 d-block arrange-title">
              Sắp xếp:
            </p>
            <select name="" className="form-control form-select" id="">
              <option value="manual">Mặc định</option>
              <option value="best-selling">Bán chạy</option>
              <option value="title ascending">A - Z</option>
              <option value="title-descending">Z - A</option>
              <option value="price-ascending">Giá từ thấp đến cao</option>
              <option value="price-descending">Giá từ cao xuống thấp</option>
            </select>
          </div>
          <div className="d-flex align-items-center gap-10">
            <p className="totalproducts mb-0">7 sản phẩm</p>
            <div className="d-flex gap-10 align-items-center grid action-page-product">
              <img
                onClick={()=>{ setGrid(3) }}
                src="./images/gr4.svg"
                className="d-block img-fluid"
                alt=""
              />
              <img
                onClick={()=>{ setGrid(4) }}
                src="./images/gr3.svg"
                className="d-block img-fluid"
                alt=""
              />
              <img
                onClick={()=>{ setGrid(6) }}
                src="./images/gr2.svg"
                className="d-block img-fluid"
                alt=""
              />
              <img
                onClick={()=>{ setGrid(12) }}
                src="./images/gr.svg"
                className="d-block img-fluid"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="product-list pb-5">
        <div className="d-flex gap-10 flex-wrap">
          {
            products?.map((item,index)=>(
              <ProductCard grid={grid} item={item} key={index}/>
            ))
          }

        </div>
      </div>
    </>
  );
};

export default ProductPage;
