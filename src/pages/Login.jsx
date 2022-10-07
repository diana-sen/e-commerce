import { useContext } from 'react'
import logo from '@/assets/react.svg'
import useForm from '@/hooks/useForm'
import { loginUserService } from '../services/userServices'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '@/context/AuthContext'
import '@/assets/css/form.css'

const Login = () => {
  const { loginUser } = useContext(AuthContext)
  const navigate = useNavigate()
  const sendData = async (data) => {
    try {
      const result = await loginUserService(data)
      if (result.status === 200) {
        loginUser(result.data.token)
        //        console.log(result.data.token)
        navigate('/')
      }
    } catch (error) {
      console.log('Error en Login: ' + error.message)
    }
  }

  const { input, handleInputChange, handleSubmit } = useForm(sendData,
    {
      email: '',
      password: ''
    })
  return (
    <main className='form-signin w-100 m-auto'>
      <form onSubmit={handleSubmit}>
        <img className='mb-4' src={logo} alt='' />
        <h1 className='h3 mb-3 fw-normal'>Please Log in</h1>

        <div className='form-floating'>
          <input
            type='email'
            className='form-control'
            id='floatingInput'
            name='email'
            value={input.email}
            onChange={handleInputChange}
            placeholder='name@example.com'
          />
          <label htmlFor='floatingInput'>Email address</label>
        </div>
        <div className='form-floating'>
          <input
            type='password'
            className='form-control'
            id='password'
            name='password'
            value={input.password}
            onChange={handleInputChange}
            placeholder='Password'
          />
          <label htmlFor='password'>Password</label>
        </div>
        <button className='w-100 btn btn-lg btn-primary' type='submit'>Log in</button>
        <p className='mt-5 mb-3 text-muted'>© 2017–2022</p>
      </form>
    </main>
  )
}

export default Login
