import useForm from '@/hooks/useForm'
import { useNavigate } from 'react-router-dom'
import { registerUserService } from '@/services/userServices'

import logo from '@/assets/react.svg'
import '@/assets/css/form.css'

const SignUp = () => {
  //   {
  //     "first_name": "Danilo",
  //     "last_name": "Parc",
  //     "gender": "M",
  //     "email": "danylo@gmail3425r2.com",
  //     "password": "gatito123",
  // }

  const navigate = useNavigate()
  const sendData = async (data) => {
    try {
      const result = await registerUserService(data)
      if (result.status === 200) {
        navigate('/login')
      }
    } catch (error) {
      console.log('Ocurrio un error en Signup: ' + error.message)
    }
  }

  const { input, handleInputChange, handleSubmit } = useForm(sendData, {
    first_name: '',
    last_name: '',
    gender: '',
    email: '',
    password: ''
  })
  return (
    <main className='form-signin w-100 m-auto'>
      <form onSubmit={handleSubmit}>
        <img className='mb-4' src={logo} alt='' />
        <h1 className='h3 mb-3 fw-normal'>Please sign up</h1>
        <div className='form-floating'>
          <input
            type='text'
            className='form-control'
            id='first_name'
            name='first_name'
            value={input.first_name}
            onChange={handleInputChange}
            placeholder='John'
          />
          <label htmlFor='first_name'>First name</label>
        </div>
        <div className='form-floating'>
          <input
            type='text'
            className='form-control'
            id='last_name'
            name='last_name'
            value={input.last_name}
            onChange={handleInputChange}
            placeholder='Doe'
          />
          <label htmlFor='last_name'>Last name</label>
        </div>
        <div className='form-floating'>
          <select
            type='text'
            className='form-select'
            id='gender'
            name='gender'
            value={input.gender}
            onChange={handleInputChange}
          >
            <option value=''>Choose..</option>
            <option value='M'>Male</option>
            <option value='F'>Female</option>
          </select>
        </div>
        <div className='form-floating'>
          <input
            type='email'
            className='form-control'
            id='email'
            name='email'
            value={input.email}
            onChange={handleInputChange}
            placeholder='name@example.com'
          />
          <label htmlFor='email'>Email address</label>
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
        <button className='w-100 btn btn-lg btn-primary' type='submit'>Sign in</button>
        <p className='mt-5 mb-3 text-muted'>?? 2017???2022</p>
      </form>
    </main>
  )
}

export default SignUp
