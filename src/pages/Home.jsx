import ProductCard from '@/components/ProductCard'
import getProductsHook from '../hooks/getProductsHook'

const Home = () => {
  const productData = getProductsHook()
  return (

    <>
      <h1>Welcome Home </h1>

      <div className='container center'>
        <div className='row'>
          {productData.products.map((item) => (
            <ProductCard key={item?._id} id={item?._id} title={item?.product_name} image={item?.image} price={item?.price} />
          ))}
          <ProductCard />
        </div>
      </div>
    </>

  )
}

export default Home
