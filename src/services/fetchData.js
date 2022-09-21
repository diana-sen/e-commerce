import { useEffect, useState } from 'react'

const APIEndpoint = 'https://ecomerce-master.herokuapp.com/api/v1/item'

export const useFetch = params => {
  const [data, setData] = useState(null) // estado de datos

  // ahora creamos una subfuncion para hacer la peticion a la API
  const fetchProductData = url => {
    fetch(url)
      .then(res => res.json())
      .then(respuestaJson => {
        if (respuestaJson.length === 0) {
          console.log('no hay datos para mostrar')
        } else {
          setData(respuestaJson || respuestaJson?.data)
          console.log('data:', respuestaJson)
        }
      })
  }
  // ahora llamamos a la funcion fetchMovie con un useEffect
  useEffect(() => {
    fetchProductData(APIEndpoint + params)
  }, [params])
  return { data }
}
