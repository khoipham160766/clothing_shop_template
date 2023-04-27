import React from 'react'
import BlogCard from '../components/BlogCard';
import { Link } from 'react-router-dom';
import {BsFillCaretRightFill} from 'react-icons/bs'

const BlogWrapper = () => {
  return (
    <>
        <div className='col-12 bg-white mb-4 col-heading'>
            <label className='section-heading'>Bài viết</label>
            <Link to="/" className="text-align-end">Xem thêm <BsFillCaretRightFill className="fs-7" /></Link>
        </div>
        <BlogCard />
    </>
  )
}

export default BlogWrapper;