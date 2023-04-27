import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Container from '../components/Container';
import CustomInput from '../components/CustomInput';

const ResetPassword = () => {
    const data_breadcrumb = [
        {
          title: "Trang chủ",
          link: "/",
          class: ""
        },
        {
          title: "Đặt lại mật khẩu",
          link: "/reset-password",
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
                        <h3 className='text-center mb-3'>Đặt lại mật khẩu</h3>
                        <form action="" className='d-flex flex-column gap-15'>
                            <CustomInput type="password" name="password" placeholder='Mật khẩu mới' classname='' />
                            <CustomInput type="password" name="password" placeholder='Xác nhận mật khẩu' classname='' />
                            <div>
                                <div className='mt-3 d-flex justify-content-center gap-15 align-items-center'>
                                    <button className='button-black'>Xác nhận</button>
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

export default ResetPassword