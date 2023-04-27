import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import CustomInput from '../components/CustomInput';

const ForgotPassword = () => {
    const data_breadcrumb = [
        {
          title: "Trang chủ",
          link: "/",
          class: ""
        },
        {
          title: "Quên mật khẩu",
          link: "/forgot-password",
          class: "link-breadcrumb-active"
        }
      ]
  return (
    <>
        <BreadCrumb data={data_breadcrumb} />
        <Container propsclass='login-wrapper py-5 home-wrapper-2'>
            <div className='row'>
                <div className='col-12'>
                    <div className='login-card'>
                        <h3 className='text-center mb-3'>Quên mật khẩu</h3>
                        <p className='text-center mt-2 mb-3'>
                            Chúng tôi sẽ gửi email để xác nhận thay đổi mật khẩu.
                        </p>
                        <form action="" className='d-flex flex-column gap-15'>
                            <CustomInput type="email" name="email" placeholder='Email' classname=''  />
                            <div>
                                <div className='mt-3 d-flex flex-column justify-content-center gap-15 align-items-center'>
                                    <button className='button-black' type='submit'>Xác nhận</button>
                                    <Link to="/login" className='button-white'>Hủy</Link>
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

export default ForgotPassword