import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { productSearch } from '../redux/productAction'
const Header = () => {
  const result = useSelector((state) => state.cartData);
  const dispatch = useDispatch();
  console.log("data in headedr", result)
  return (
    <div className='header'>
      <Link to='/'><h1 className='logo'>E-Commerce </h1></Link>
      <div className='search-box'>
        <input type='text' onChange={(e) => dispatch(productSearch(e.target.value))} placeholder='Search Product ...' />
      </div>
      <div className='cart-div'>
        <Link to='cart'>
          <span>{result.length}</span>
          <svg className='svg' fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
        </Link>
      </div>
    </div>
  )
}

export default Header