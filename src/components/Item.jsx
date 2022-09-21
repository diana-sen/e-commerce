import React from 'react'

const Item = () => {
  return (
    <div>
      <div className='card border-secondary mb-3' style={{ maxWidth: '20rem' }}>
        <div className='card-header'>Header</div>
        <div className='card-body'>
          <h4 className='card-title'>Secondary card title</h4>
          <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
    </div>
  )
}

export default Item
