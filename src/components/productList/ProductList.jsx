import React from 'react'
import "./productList.css"
import certificate1 from '../../img/certificate1.png'
import certificate2 from '../../img/certificate2.png'
import certificate3 from '../../img/certificate3.png'
import certificate4 from '../../img/certificate4.png'

function productList() {
  return (
    <div className='pl'>
      <div className="pl-texts">
        <h1 className='pl-title'>My certificates</h1>
        <p className="pl-desc">
          My certificates from different competitions and from different fields.
        </p>
      </div>
      <div className="pl-list">
        <img className='imagecertificate' src={certificate1} alt={certificate1} />
        <img className='imagecertificate' src={certificate2} alt={certificate2} />
        <img className='imagecertificate' src={certificate3} alt={certificate3} />
        <img className='imagecertificate' src={certificate4} alt={certificate4} />
      </div>
    </div>
  )
}

export default productList