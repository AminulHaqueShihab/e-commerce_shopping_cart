import React, { useContext } from 'react'
import { PRODUCTS } from '../../products'
import {ShopContext} from '../../contexts/shop-context';
import { CartItem } from './cart-item';
import './cart.css';
import { CreditCard, Storefront } from 'phosphor-react';
import { useNavigate } from 'react-router-dom';
import Taka from '../../assets/taka.png';


export const Cart = () => {
    const { cartItems, getTotalAmount, getTotalItems } = useContext(ShopContext);
    const navigate = useNavigate();
    const totalAmount = getTotalAmount();
    const vat = totalAmount*0.05;
    return (
        <div className='carts'>
            <div className='cartTitle'> 
                <h1>Items in Your Cart</h1>
            </div>
            <div className='cartItems'>
                {PRODUCTS.map((product) => {
                    if(cartItems[product.id] > 0) {
                        return <CartItem data={product} />;
                    }
                })}
            </div>
            {totalAmount > 0 ?
            <div className='checkOut'>
                <div className='total'>
                    <div className='totalText'>
                        <p>Number of Items: {getTotalItems()}</p>
                        <p>Sub Total: <img src={Taka} className='taka' alt='taka'/>{totalAmount}</p>
                        <p>Vat: <img src={Taka} className='taka' alt='taka'/>{vat}  (5%)</p>
                        <p>Shipping: <img src={Taka} className='taka' alt='taka'/>60</p>
                        <h2>Total: <img src={Taka} className='totalTaka' alt='taka'/>{Math.round(totalAmount + vat + 60)}</h2>
                    </div>
                </div>
                
                <div className='continueBttn' onClick={() => navigate('/')}>
                    <a href='#'><Storefront size={32} /> Continue Shopping</a>
                </div>
                <div className='checkoutBttn'>
                    <a href='#'> Checkout <CreditCard size={32} /></a>
                </div>
            </div>
            : (<><h1>Your Cart is Empty</h1>
            <div className='continueBttn' onClick={() => navigate('/')}>
                <a href='#'><Storefront size={32} /> Go Back to Shopping</a>
            </div></>
            )}
        </div>
    )
}
