import React from 'react';
import useStyles from './styles';
import { GiShakingHands } from 'react-icons/gi';

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <GiShakingHands /> SWApp {new Date().getFullYear()} by <b>カムラニチェサレ</b>
    </div>
  )
}
