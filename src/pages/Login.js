import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import { Link } from 'react-router-dom';
import Container from '../components/Container';

const Login = () => {
    const data_breadcrumb = [
        {
          title: "Trang chủ",
          link: "/",
          class: ""
        },
        {
          title: "Đăng nhập",
          link: "/login",
          class: "link-breadcrumb-active"
        }
      ]
  return (
    <>
        <BreadCrumb data={data_breadcrumb} />
        <Container propsclass='login-wrapper py-2 home-wrapper-2'>
            <div className='row'>
                <div className='col-12'>
                    <div className='login-card'>
                        <h3 className='text-center mb-3'>Đăng nhập</h3>
                        <form action="" className='d-flex flex-column gap-15'>
                            <div className='user-box'>
                                <input type='text' name="" required />
                                <label>Email</label>
                            </div>
                            <div className='user-box'>
                                <input type='password' name="" required />
                                <label>Mật khẩu</label>
                            </div>
                            <div>
                                <Link to="/forgot-password" className='btn-forgot-password'>Quên mật khẩu ?</Link>
                                <div className='mt-3 d-flex justify-content-center gap-15 align-items-center'>
                                    <button className='button-black'>Đăng nhập</button>
                                    <Link to="/register" className='button-white'>Đăng ký</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Container>
    </>
  )
}

export default Login;