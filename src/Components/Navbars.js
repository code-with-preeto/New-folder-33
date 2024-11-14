import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { addToCart } from '../features/cartSlice';
const Navbars = () => {
    
    const cart=useSelector((state)=>state.allCart.cart)
    const totalPrice =useSelector((state)=>state.allCart.totalPrice)
    return (
        <div className='nav_bar sticky-top'>
            <Link to={"/"}className='left' style={{textDecoration:"none",color:'white'}}>Redux-Toolkit</Link>
            <div className='middle'>

                <button className='btn btn-warning'>
                   <h3>Cart items Total Price ={totalPrice}</h3>
                </button>

            </div>
            <Link to={"/data"}className='right'>
                <button type="button" className="btn btn-primary position-relative">
                    <span class="material-symbols-outlined">
                        shopping_cart
                    </span>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {cart.length}
                        <span className="visually-hidden">unread messages</span>
                    </span>
                </button>

            </Link>

        </div>
    )
}

export default Navbars