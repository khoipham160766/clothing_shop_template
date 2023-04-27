import React from 'react'
import { Link, useLocation } from 'react-router-dom';

const BlogCard = () => {
    let location = useLocation();
    const handleScrollToTop = () => {
        window.scrollTo(0, 0);
      }
  return (
    <>
        <div className={` ${location.pathname === "/blogs" ? `col-12 col-md-6 col-xl-4` : `col-12 col-md-4 col-lg-4 col-xl-3` } mb-3`} onClick={handleScrollToTop}>
            <div className='blog-card'>
                <div className='card-image'>
                    <img className='img-fluid w-100' src="../images/clothing-shop/image-blog.png" alt="" />
                </div>
                <div className='blog-content'>
                    <p className='date'>17 tháng 4, 2023</p>
                    <h5 className='title'>Thời trang mùa hè</h5>
                    <p className='desc'>
                        Cùng bắt đầu một mùa hè sôi động thôi. Thông qua bài viết này chúng tôi sẽ chỉ 
                        cho bạn cách để phối đồ phù hợp với mùa hè này nhất.
                    </p>
                    <Link to="/blog/:id" className='button-black'>
                        Xem thêm
                    </Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default BlogCard;