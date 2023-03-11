import React from 'react'
import "./product.css"

function Product({img,link,key}) {
  return (
    <div className='p'>
      <div className="p-browser">
        <div className="p-cricle"></div>
        <div className="p-cricle"></div>
        <div className="p-cricle"></div>
      </div> 
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className="p-img" />
      </a>
    </div>
  )
}

export default Product