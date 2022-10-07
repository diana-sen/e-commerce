import React from 'react'

const ProductCard = ({ id, title, image }) => {
  return (
    <div>
      <div className='card border-secondary mb-3' style={{ maxWidth: '20rem' }}>
        <img src={image} className='card-img-product' alt='idProduct' height={200} />

        <div className='card-body'>
          <h4 className='card-title'>{title}</h4>
          <p className='card-text'>$</p>
        </div>
      </div>
    </div>

  )
}

export default ProductCard
