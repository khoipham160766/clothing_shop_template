import React from 'react'
import { type } from '../data';

const WrapperCategories = () => {
  return (
    <>
        <div className="categories d-flex justify-content-between flex-wrap align-items-center">
            {
                type?.map((item,index)=>(
                    <div className='d-flex gap align-items-center' key={index}>
                        <div>
                            <h6>{item.title}</h6>
                            <p>{item.quantity} mẫu</p>
                        </div>
                        <img src={item.images} alt="" className='img-fluid image-category' />
                    </div>
                ))
            }
        </div>
    </>
  )
}

export default WrapperCategories;