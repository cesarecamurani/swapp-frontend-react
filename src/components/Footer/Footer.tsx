import React from 'react';
import useStyles from './styles';
import { FaHandsHelping } from 'react-icons/fa';

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <FaHandsHelping /> SWApp by Cesare Camurani
    </div>
  )
}
