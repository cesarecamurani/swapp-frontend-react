import React from 'react';
import './NavBar.scss'
import { FaHandsHelping } from 'react-icons/fa';
import DefaultButton from '../DefaultButton/DefaultButton';

function NavBar() {
  return (
    <header className="NavBar">
      <div> <FaHandsHelping /> SWApp </div>
      <DefaultButton />
    </header>
  )
}

export default NavBar
