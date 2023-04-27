import React from 'react'
import Marquee from 'react-fast-marquee';
import { brands } from '../data';

const MarqueeWrapper = () => {
  return (
    <>
        <div className='marrquee-inner-wrapper card-wrapper '>
            <Marquee>
                {
                    brands?.map((item,index)=>(
                        <div className='mx-5 w-25' key={index}>
                            <img src={item.image} alt="" />
                        </div>
                    ))
                }
            </Marquee>
        </div>
    </>
  )
}

export default MarqueeWrapper;