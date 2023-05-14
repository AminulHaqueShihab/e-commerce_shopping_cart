import React, { createContext } from 'react';
import { PRODUCTS } from '../products';
import { useState } from 'react';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i <= PRODUCTS.length; i++) {
        cart[i] = 0;
    }
    return cart;
}

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const getTotalAmount = () => {
        let totalAmount = 0;
        for (let i = 1; i <= PRODUCTS.length; i++) {
            if(cartItems[i] > 0)
            totalAmount += cartItems[i]*PRODUCTS[i-1].price;
        }
        return totalAmount;
    };
    const getTotalItems = () => {
        let totalItems = 0;
        for (let i = 1; i <= PRODUCTS.length; i++) {
            if(cartItems[i] > 0)
            totalItems += cartItems[i];
        }
        return totalItems;
    };
    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    };
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    };
    const updateCartItemCount = (itemId, newAmount) => {
        setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
    };

    const contextValue = { 
        cartItems, addToCart, removeFromCart, updateCartItemCount, getTotalAmount, getTotalItems 
    };

    return (
        <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
    );
};
