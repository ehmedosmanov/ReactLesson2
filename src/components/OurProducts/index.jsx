import React from 'react'
import Product from '../Product'
import Data from './data'
import './index.css'

const OurProducts = () => {
  return (
    <div className='products'>
      {Data.map((item, i) => (
        <Product key={i} {...item}/>
      ))}
    </div>
  )
}

export default OurProducts