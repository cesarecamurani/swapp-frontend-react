import React from 'react';
import useStyles from './styles';

export default function NavbarButton(props: any) {
  const classes = useStyles();

  return (
    <div className={classes.navbarButton}>{props.children}</div>
  )
}
