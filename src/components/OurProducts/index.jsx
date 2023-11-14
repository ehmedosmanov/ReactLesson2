import React from 'react'
import Product from '../Product'
import Data from './data'
import './index.css'

const OurProducts = () => {
  return (
    <div className='products'>
      {Data.map((item) => (
        <Product key={item.id} title={item.title} price={item.price} name={item.rating}/>

      ))}
    </div>
  )
}

export default OurProducts