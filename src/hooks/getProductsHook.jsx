import { useState, useEffect } from 'react'
import { getProducts } from '../services/userServices'
function getProductsHook () {
  const [products, setProducts] = useState([])
  useEffect(() => {
    getProducts()
      .then((res) => {
        setProducts(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return {
    products
  }
}

export default getProductsHook
