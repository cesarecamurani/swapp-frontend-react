import React from 'react';
import './NavBarButtons.scss'
import DefaultButton from '../../DefaultButton/DefaultButton';

function NavBarButtons() {
  return (
    <header className="NavBarButtons">
      <DefaultButton> Login </DefaultButton>
      <DefaultButton> Create a new account </DefaultButton>
    </header>
  )
}

export default NavBarButtons
