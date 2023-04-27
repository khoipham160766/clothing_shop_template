import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';
const ProductCard = (props) => {
    const { grid } = props;
    let location = useLocation();
    const handleScrollToTop = () => {
        window.scrollTo(0, 0);
    }
  return (
    <>
        <div className={` ${location.pathname === "/ourstore" ? `gr-${grid}` : `col-${grid} mb-5`} `} onClick={handleScrollToTop}>
            <Link to={`/product/${props.item.id}`} className='product-card position-relative'>
                {
                    (props.item.sale === 0)?null:
                    <div className='sale position-absolute'>
                        <h6>-{props.item.sale}%</h6>
                    </div>
                }
                <div className='wishlist-icon position-absolute'>
                    <button className='border-0 bg-transparent'>
                        <img src="./images/wish.svg" alt="" />
                    </button>
                </div>
                <div className='product-image'>
                    <img className='img-fluid' src={props.item.main_image} alt="" />
                    <img className='img-fluid' src={props.item.main_image} alt="" />
                </div>
                <div className='product-details'>
                    <h6 className='brand'>
                        {props.item.brand}
                    </h6>
                    <div className='add-class-title-product'>
                        <h5 className='product-title'>
                            {props.item.name}
                        </h5>
                    </div>
                    <ReactStars
                        count={5}
                        size={24}
                        isHalf={true}
                        value={props.item.rate}
                        edit={false}
                        emptyIcon={<i className="far fa-star"></i>}
                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                        fullIcon={<i className="fa fa-star"></i>}
                        activeColor="#ffd700"
                    />
                    <p className={`description ${ grid === 12 ? ` ${location.pathname === "/ourstore" ? `d-block` : `d-none`} ` : "d-none" }`}>
                        Áo thun.
                    </p>
                    {
                        (props.item.sale === 0)?
                            <p className='price'>
                                {` ${props.item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} đ`}
                            </p>
                        :
                            <div className='d-flex align-items-center'>
                                <p className='mb-0 sale-price'>
                                    {` ${(props.item.price/100*(100-props.item.sale)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} đ ` }
                                </p>
                                <p className='mb-0 normal-price mx-2'>
                                    {` ${props.item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} đ`}
                                </p>
                            </div>
                    }

                </div>
                <div className='action-bar position-absolute'>
                    <div className='d-flex flex-column gap-15'>
                        <button className='border-0 bg-transparent'>
                            <img src="./images/prodcompare.svg" alt="" />
                        </button>
                        <button className='border-0 bg-transparent'>
                            <img src="./images/view.svg" alt="" />
                        </button>
                        <button className='border-0 bg-transparent'>
                            <img src="./images/add-cart.svg" alt="" />
                        </button>
                    </div>
                </div>
            </Link>
        </div>
    </>
  )
}

export default ProductCard;