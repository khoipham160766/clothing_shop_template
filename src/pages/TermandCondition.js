import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Container from '../components/Container';

const TermandCondition = () => {
  return (
    <>
        <BreadCrumb title='Term and Condition' />
        <Container propsclass='policy-wrapper py-5 home-wrapper-2'>
            <div className='row'>
                <div className='col-12'>
                    <div className='policy'></div>
                </div>
            </div>
        </Container>
    </>
  )
}

export default TermandCondition