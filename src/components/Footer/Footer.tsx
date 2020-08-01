import React from 'react';
import useStyles from './styles';
import { GiWingfoot } from 'react-icons/gi';
// import { FaHandsHelping } from 'react-icons/fa';

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <GiWingfoot /> SWApp by Cesare Camurani
    </div>
  )
}
