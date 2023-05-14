import React, { useContext } from 'react'
import Taka from '../../assets/taka.png';
import { ShopContext } from '../../contexts/shop-context';

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemsAmount = cartItems[id];
  return (
    <div className='product'>
        <img src={productImage} alt={productName}/>
        <div className='description'>
            <h3>{productName}</h3>
            <p className='price'> 
              <img src={Taka} className='taka' alt='taka'/>
              <b>{price}</b>
            </p>
            <button className='addToCartBttn' onClick={() => addToCart(id)}>
              Add To Cart {cartItemsAmount > 0 && <> ({cartItemsAmount}) </>}
            </button>
        </div>
    </div>
  )
}
