import React from 'react';
import './NavBar.scss'
import { FaHandsHelping } from 'react-icons/fa';
import NavBarButtons from './NavBarButtons/NavBarButtons';

function NavBar() {
  return (
    <header className="NavBar">
      <div> <FaHandsHelping /> SWApp </div>
      <NavBarButtons />
    </header>
  )
}

export default NavBar
