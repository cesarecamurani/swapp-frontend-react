import React from 'react';
import './NavBar.scss'
import { FaHandsHelping } from 'react-icons/fa';
import { GiWingfoot } from 'react-icons/gi';
import NavBarButtons from './NavBarButtons/NavBarButtons';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import NavBarButton from './NavBarButtons/NavBarButton/NavBarButton';
import { HOME_PATH, LOGIN_PATH, REGISTER_PATH } from '../../paths';
// import SearchBar from './SearchBar/SearchBar';

export default function NavBar() {
  return (
    <div className='NavBar'>
      <Router>
        <Link className='text-link' to={HOME_PATH} >
          <div className='title'><FaHandsHelping /> SWApp </div>
        </Link>
        <GiWingfoot />
        <NavBarButtons>
          <Link className='text-link' to={LOGIN_PATH}>
            <NavBarButton> Login </NavBarButton>
          </Link>
          <Link className='text-link' to={REGISTER_PATH}>
            <NavBarButton> Create a new account </NavBarButton>
          </Link>
        </NavBarButtons>
      </Router>
    </div>
  )
}
