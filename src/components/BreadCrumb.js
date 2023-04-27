import React from "react";
import { Link } from "react-router-dom";

const BreadCrumb = ({data}) => {
  return (
    <div className="breadcrumb py-3 mb-0">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12 text-center">
            <p className="mb-0">
              {
                data?.map((item,index)=>(
                  <Link to={item.link} className={`link-breadcrumb ${item.class}`} key={index} >
                    &nbsp; {item.title} &nbsp;
                  </Link>
                ))
              }
              {/* <Link to="/" className="text-dark">
                Home &nbsp;
              </Link>
               / {title} */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;
