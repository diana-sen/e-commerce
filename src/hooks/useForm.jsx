
import { useState, useEffect } from 'react'

function useForm (callback, defaults) {
  // Estado único para guardar los datos de mi formulario en un objeto
  const [input, setInput] = useState(defaults)

  // Cargar valores por defecto
  useEffect(() => {
    setInput({ ...defaults })
  }, [])

  const handleInputChange = (event) => {
    const { name, value } = event.target
    // console.log(name, value)
    setInput({ ...input, [name]: value })
  }

  // Form
  const handleSubmit = (event) => {
    event.preventDefault() // prevent reloading
    callback(input)
  }

  return {
    input,
    handleInputChange,
    handleSubmit
  }
}

export default useForm
