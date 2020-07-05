import React from 'react';
import './DefaultButton.scss'

function DefaultButton(props: any) {
  return (
    <div className="DefaultButton">{props.children}</div>
  )
}

export default DefaultButton
