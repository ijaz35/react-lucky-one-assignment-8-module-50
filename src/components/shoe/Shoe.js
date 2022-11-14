import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Shoe.css';




const Shoe = (props) => {
    const { shoe, showSelectedItems } = props;
    const { img, name, price } = shoe;


    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <h5>Product Name</h5>
                <h5>Price</h5>
            </div>
            <div className="product-info">
                <p>{name}</p>
                <p>$ {price}</p>
            </div>
            <button onClick={() => showSelectedItems(shoe)} className='btn-cart'>
                <p className='btn-text'>Add To Cart</p>
                <FontAwesomeIcon
                    icon={faShoppingCart}></FontAwesomeIcon>
            </button>

        </div>
    );
};

export default Shoe;