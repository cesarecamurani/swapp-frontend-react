import React from 'react';
import './NavBar.scss'
import { FaHandsHelping } from 'react-icons/fa';
import NavBarButtons from './NavBarButtons/NavBarButtons';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import NavBarButton from './NavBarButtons/NavBarButton/NavBarButton';
import SearchBar from './SearchBar/SearchBar';

function NavBar() {
  return (
    <div className='NavBar'>
      <div className="title"><FaHandsHelping /> SWApp </div>
      <SearchBar />
      <NavBarButtons>
        <Router>
          <Link to='/login' style={{ textDecoration: 'none' }}>
            <NavBarButton> Login </NavBarButton>
          </Link>
          <Link to='/register' style={{ textDecoration: 'none' }}>
            <NavBarButton component={Link} to={'/register'}> Create a new account </NavBarButton>
          </Link>
        </Router>
      </NavBarButtons>
    </div>
  )
}

export default NavBar
