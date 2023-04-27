import React from 'react'

const Color = (props) => {
  return (
    <>
        <ul className='colors ps-0 mb-0'>
          {
            props.arrcolor?.map((item,index)=>(
              <li style={{backgroundColor: item}} key={index}></li>
            ))
          }
        </ul>
    </>
  )
}

export default Color;