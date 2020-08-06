import React from 'react';
import useStyles from './styles';

export default function DefaultButton(props: any) {
  const classes = useStyles();

  return (
    <div>
      <button
        className={classes.defaultButton}
        disabled={props.disabled}
        onClick={props.onClick}
      >{props.children}</button>
    </div>
  )
}
