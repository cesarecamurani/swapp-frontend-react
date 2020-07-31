import React from 'react';
import useStyles from './styles';

export default function NavbarButtons(props: any) {
  const classes = useStyles();

  return (
    <div className={classes.navbarButtons}>{props.children}</div>
  )
}
