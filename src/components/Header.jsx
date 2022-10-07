import { useContext } from 'react'
import { AuthContext } from '@/context/AuthContext'
import { Link } from 'react-router-dom'
import './header.scss'

const Header = () => {
  const { isAuth, logOut } = useContext(AuthContext)
  return (
    <nav className='header navbar navbar-expand-lg navbar-dark bg-primary'>
      <Link to='/' className='header__logo'>LOGO</Link>
      <ul className='header__nav-list'>

        <li className='header__list-item'>
          <Link to='/' className='header__item-link header_item-link--is-active'>Home</Link>
        </li>

        <li className='header__list-item'>
          <Link to='/dashboard' className='header__item-link'>Dashboard</Link>
        </li>

        {
      !isAuth
        ? (
          <>
            <li className='header__list-item'>
              <Link to='/login' className='header__item-link'>Login</Link>
            </li>

            <li className='header__list-item'>
              <Link to='/signup' className='header__item-link'>Sign Up</Link>
            </li>
          </>
          )
        : (
          <>

            <li className='header__list-item'>
              <Link to='/secret' className='header__item-link'>Secret</Link>
            </li>
            <li className='header__list-item'>
              <Link
                to='/'
                className='header__item-link'
                onClick={logOut}
              >Logout
              </Link>
            </li>
          </>

          )
      }

      </ul>
    </nav>
  )
}

export default Header
