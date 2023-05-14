import React, { useContext } from 'react'
import Taka from '../../assets/taka.png';
import { ShopContext } from '../../contexts/shop-context';

export const CartItem = (props) => {
    const { id, productName, price, productImage } = props.data;
    const { addToCart, cartItems, removeFromCart, updateCartItemCount } = useContext(ShopContext);
    return (
        <div className='cartItem'>
            <img src={productImage} alt={productName}/>
            <div className='description'>
                <h3>{productName}</h3>
                <p className='price'> 
                    <img src={Taka} className='taka' alt='taka'/>
                    <b>{price}</b>
                </p>
                <div className='countHandler'>
                    <button className='tinyBttn' onClick={() => removeFromCart(id)}> - </button>
                    <input value={cartItems[id]} onChange={(e) => updateCartItemCount(id, Number(e.target.value))} className='input'/>
                    <button className='tinyBttn' onClick={() => addToCart(id)}>+</button>
                </div>
            </div>
        </div>
    )
}
