import CartItem from '../CartItem/CartItem';
import './Cart.css'

const Cart = ({ cart, chooseOne, removeCart, deleteBtn }) => {


    return (
        <div className="cart">
            <h2 style={{ textAlign: 'center' }}>Selected Items</h2>

            <div >
                {
                    cart.map(cartItem => <CartItem
                        key={cartItem.id}
                        cartItem={cartItem}
                        deleteBtn={deleteBtn}></CartItem>)
                }
            </div>
            <button onClick={chooseOne}
                className='choose-btn'>
                <p>Choose One For Me</p>
            </button>
            <button onClick={removeCart}
                className='refresh-btn'>
                <p>Refresh Cart</p>
            </button>
        </div>
    );
};

export default Cart;