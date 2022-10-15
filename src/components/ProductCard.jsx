import React from 'react'

const ProductCard = ({ id, title, image, price }) => {
  return (
    <div>
      <div className='card bg-light mb-3' style={{ maxWidth: '20rem' }}>
        <img src={image} className='card-img-product' alt='idProduct' height={200} />

        <div className='card-body'>
          <h4 className='card-title fw-semibold text-uppercase'>{title}</h4>
          <div>
            <p className='product-price'>${price}</p>
            <button type='button' class='btn btn-danger'>Add to cart</button>
          </div>

        </div>

      </div>
    </div>
  )
}

export default ProductCard
