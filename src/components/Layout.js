import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import {AiOutlineArrowUp} from "react-icons/ai";

const Layout = () => {
  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  }
  return (
    <>
        <Header />
        <Outlet />
        <Footer />
        <div onClick={handleScrollToTop} className='btn-scroll-to-top'>
          <AiOutlineArrowUp />
        </div>
    </>
  )
}

export default Layout;