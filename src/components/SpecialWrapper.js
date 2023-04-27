import React from 'react'
import SpecialProductCard from './SpecialProductCard';
import { products } from '../data';
import {BsFillCaretRightFill} from 'react-icons/bs';
import { Link } from 'react-router-dom';

const SpecialWrapper = () => {
  const new_product = products.slice(3,6);
  console.log(new_product)
  return (
    <>
        <div className='col-12 bg-white mb-4 col-heading'>
            <label className='section-heading'>Sản phẩm đặc biệt</label>
            <Link to="/" className="text-align-end">Xem thêm <BsFillCaretRightFill className="fs-7" /></Link>
        </div>
        {
          new_product?.map((item,index)=>(
              <SpecialProductCard key={index} data={item} range={Math.floor(Math.random() * 100)}/>
          ))
        }
        {/* <SpecialProductCard />
        <SpecialProductCard />
        <SpecialProductCard /> */}
    </>
  )
}

export default SpecialWrapper;