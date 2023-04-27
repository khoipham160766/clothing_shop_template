import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import BlogCard from '../components/BlogCard';
import Container from '../components/Container';

const Blogs = () => {
  const data_breadcrumb = [
    {
      title: "Trang chủ",
      link: "/",
      class: ""
    },
    {
      title: "Blogs",
      link: "/blogs",
      class: "link-breadcrumb-active"
    }
  ]
  return (
    <>
        <BreadCrumb data={data_breadcrumb} />
        <Container propsclass='blog-wrapper home-wrapper-2 py-2'>
          <div className='row'>
            <div className='col-12 filter-blog-mb'>
              <div>
                <select>
                  <option>Tất cả</option>
                  <option>T-Shirt</option>
                  <option>Shirt</option>
                  <option>Sweater</option>
                  <option>Hoodie</option>
                </select>
              </div>
            </div>
            <div className='col-3 filter-blog'>
              <div className='filter-card mb-2'>
                <h3 className='filter-title mb-1 '>
                  Danh mục
                </h3>
                <div>
                  <ul className='ps-0'>
                    <li>T-Shirt</li>
                    <li>Shirt</li>
                    <li>Sweater</li>
                    <li>Hoodie</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-12 col-md-9'>
              <div className='row'>
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
              </div>
            </div>
          </div>
        </Container>
    </>
  )
}

export default Blogs;