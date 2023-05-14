import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';
import "./Navbar.css";
import { ShopContext } from '../contexts/shop-context';

export const Navbar = () => {
  const { cartItems, getTotalItems } = useContext(ShopContext);
  const totalItems = getTotalItems()

  return (
    <div className='navbar'>
      <div className='links'>
        <Link to={'/'}>Shop</Link>
        <Link to={'/cart'}>
          <ShoppingCart size={32} />
          <span className='badge badge-warning' id='lblCartCount'>
            {totalItems}
          </span> 
        </Link>
      </div>
    </div>
  )
};
