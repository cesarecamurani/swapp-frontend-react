import React from 'react';
import './NavBarButtons.scss'

function NavBarButtons(props: any) {
  return (
    <div className="NavBarButtons">{props.children}</div>
  )
}

export default NavBarButtons
