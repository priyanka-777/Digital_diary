import React from 'react'
import Avatar from 'react-avatar'
import { FaAddressBook ,FaRegistered} from "react-icons/fa";
import { RxHome } from "react-icons/rx";
import { BiLogIn,BiWorld } from "react-icons/bi";
import { CgNotes } from "react-icons/cg";
import { Link, useLocation } from 'react-router-dom'
import {
  getFromLocalStorage,
  removeFromLocalStorage,
} from '../utils/localStorage'

const Nav = () => {
  const { pathname } = useLocation()

  getFromLocalStorage('userInfo')

  return (
    <nav className='navbar navbar-expand-sm navbar-dark bg-primary'>
      <div className='container'>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav '>
            <li className='nav-item fs-4 title'>
              <Link
                className={pathname === '/' ? 'active nav-link' : 'nav-link'}
                to='/'
              >  <BiWorld size='38px' /> MY AMIGO 
              </Link>
            </li>
          </ul>
          <ul className='navbar-nav ms-auto'>
            {getFromLocalStorage('userInfo') ? (
              <>
                <li className='nav-item'>
                  <div className='flex justify-content-start align-items-center nav-link'>
                    <Avatar
                      name={getFromLocalStorage('userInfo')?.name}
                      size='20'
                      textSizeRatio={1.75}
                      round='25px'
                      className='mb-1'
                    />{' '}
                    <span>{getFromLocalStorage('userInfo')?.name}</span>
                  </div>
                </li>
                <li className='nav-item'>
                  
                  <Link
                    onClick={() => removeFromLocalStorage('userInfo')}
                    className='nav-link'
                    to='/login'
                  >
                    Logout
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className='nav-item'>
                 
                <Link
                    className={
                      pathname === '/home' ? 'active nav-link' : 'nav-link'
                    }
                    to='/home'
                  ><RxHome size='20px' /> HOME
                  </Link>
                 
                </li>&emsp;
                <li className='nav-item'>
                  <Link
                    className={
                      pathname === '/about' ? 'active nav-link' : 'nav-link'
                    }
                    to='/about'
                  ><CgNotes size='20px' /> ABOUT
                  </Link>
                </li>&emsp;
                <li className='nav-item'>
                  <Link
                    className={
                      pathname === '/register' ? 'active nav-link' : 'nav-link'
                    }
                    to='/register'
                  ><FaRegistered size='20px' /> REGISTER
                  </Link>
                </li>
                &emsp;
                <li className='nav-item'>
                  <Link
                    className={
                      pathname === '/login' ? 'active nav-link' : 'nav-link'
                    }
                    to='/login'
                  ><BiLogIn size='20px'/> LOGIN
                  </Link>
                </li>

              &emsp;
             
                
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav
