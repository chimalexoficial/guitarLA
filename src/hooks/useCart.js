import { useState, useEffect } from 'react';
import { db } from '../data/db.js';


const useCart = () => {

    const initialCart = () => {
        const localStorageCart = localStorage.getItem('cart');
        if (localStorageCart != null) {
            return JSON.parse(localStorageCart);
        } else {
            return [];
        }
    }

    const MAX_ITEMS = 5;
    const MIN_ITEMS = 1;
    const [data] = useState(db);
    const [cart, setCart] = useState(initialCart);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart])

    function addToCart(item) {
        const itemExists = cart.findIndex((guitar) => item.id === guitar.id);
        console.log(itemExists);

        if (itemExists >= 0) { // update quantity
            console.log('Already exists');
            if (cart[itemExists].quantity >= MAX_ITEMS) return;
            const updatedCart = [...cart];
            updatedCart[itemExists].quantity++;
            setCart(updatedCart);
        } else { // add to cart
            console.log('Adding...');
            item.quantity = 1;
            setCart((prevState) => [...prevState, item]);
        }
    }

    function removeFromCart(id) {
        console.log('Removing...');
        console.log(id);
        setCart(cart.filter(item => item.id !== id));
    }

    function increaseQuantity(id) {
        const updatedCart = cart.map((item) => {
            if (item.id === id && item.quantity < MAX_ITEMS) {
                return {
                    ...item,
                    quantity: item.quantity + 1
                }
            }
            return item;
        })
        setCart(updatedCart);
    }

    function decreaseQuantity(id) {
        const updatedCart = cart.map((item) => {
            if (item.id === id && item.quantity > MIN_ITEMS) {
                return {
                    ...item,
                    quantity: item.quantity - 1
                }
            }
            return item;
        })
        setCart(updatedCart);
    }

    function emptyCart() {
        console.log('cleaning all the items...');
        setCart([]);
    }

    return {
        data,
        cart,
        addToCart,
        removeFromCart,
        decreaseQuantity,
        increaseQuantity,
        emptyCart
    }
}

export default useCart;