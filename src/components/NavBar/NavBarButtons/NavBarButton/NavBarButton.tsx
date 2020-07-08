import React from 'react';
import './NavBarButton.scss'

function NavBarButton(props: any) {
  return (
    <div className="NavBarButton">{props.children}</div>
  )
}

export default NavBarButton
