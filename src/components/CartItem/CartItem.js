import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './CartItem.css'

const CartItem = (props) => {
    const { cartItem, deleteBtn } = props;
    const { img, name } = cartItem;
    return (
        <div className='product-info'>
            <img src={img} alt="" />
            <p>{name}</p>
            <FontAwesomeIcon onClick={() => deleteBtn(cartItem)}
                icon={faTrash}></FontAwesomeIcon>
        </div>
    );

};

export default CartItem;