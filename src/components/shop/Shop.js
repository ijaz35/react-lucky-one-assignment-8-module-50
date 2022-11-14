import React, { useEffect, useState } from 'react';
import { addToDb, getCart } from '../../storage';
import Cart from '../cart/Cart';
import Shoe from '../shoe/Shoe';


import './Shop.css'

const Shop = () => {
    const [cart, setCart] = useState([]);
    const shoes = [
        {
            "id": "636fb612cd550582c6faed36",
            "name": "Knee-Hi",
            "price": 138,
            "img": require("../../images/image-1.jpg")
        },
        {
            "id": "636fb61246ee1d0edaed7fa9",
            "name": "Truth Footwear",
            "price": 126,
            "img": require("../../images/image-2.jpg")
        },
        {
            "id": "636fb6129ee53b47bae89615",
            "name": "Converse Black",
            "price": 231,
            "img": require("../../images/image-3.jpg")
        },
        {
            "id": "636fb612a07edcf03758ee65",
            "name": " Legend Shoes",
            "price": 329,
            "img": require("../../images/image-4.jpg")
        },
        {
            "id": "636fb612484a5fb63b221a34",
            "name": "Leather Santana",
            "price": 431,
            "img": require("../../images/image-5.jpg")
        },
        {
            "id": "636fb61298839a72feb36f00",
            "name": "Paparazzo",
            "price": 530,
            "img": require("../../images/image-6.jpg")
        },
        {
            "id": "636fb6121ac38788064865cb",
            "name": "Mode Shoemakers",
            "price": 628,
            "img": require("../../images/image-7.jpg")
        },
        {
            "id": "636fb6124f59b7e4610c618f",
            "name": "Platformist Greer",
            "price": 836,
            "img": require("../../images/image-8.jpg")
        },
        {
            "id": "636fb61265907fa24cb21ece",
            "name": " Strut Hughes",
            "price": 935,
            "img": require("../../images/image-9.jpg")
        }

    ];
    useEffect(() => {
        const storedCart = getCart();
        const savedCart = [];
        for (const id in storedCart) {
            const addedProduct = shoes.find(product => product.id === id);
            if (addedProduct) {
                savedCart.push(addedProduct);
            }

        }
        setCart(savedCart)
    }, []);

    const showSelectedItems = (selectedProduct) => {
        const exist = cart.find(product => product.id === selectedProduct.id);

        if (!exist) {
            const newCart = [...cart, selectedProduct];
            if (newCart.length > 4) {
                alert('More than four items added');
            }
            setCart(newCart);
        } else {
            alert('Product already exist');
        }
        addToDb(selectedProduct.id)
    }
    const chooseOne = () => {
        const index = (Math.round(Math.random() * (cart.length - 1)));
        const chosenItemArray = [];
        if (cart.length) {
            const chosenItem = cart[index];
            chosenItemArray.push(chosenItem)
            setCart(chosenItemArray);
            console.log(chosenItem)

        } else {
            alert('Cart is Empty')
        }

    }
    const removeCart = () => {
        const emptyCart = [];
        setCart(emptyCart);
    }
    const deleteBtn = (cartItem) => {
        const restProduct = cart.filter(product => product.id !== cartItem.id);
        setCart(restProduct)
    }
    return (
        <div className=" shop-container">
            <div className='products-container'>
                {
                    shoes.map(shoe => <Shoe
                        key={shoe.id}
                        shoe={shoe}
                        showSelectedItems={showSelectedItems}></Shoe>)
                }
            </div>
            <div className="cart-container">
                <Cart
                    cart={cart}
                    chooseOne={chooseOne}
                    removeCart={removeCart}
                    deleteBtn={deleteBtn}
                ></Cart>

            </div>
        </div>

    );
};

export default Shop;