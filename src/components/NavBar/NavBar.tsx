import React from 'react';
import useStyles from './styles';
import { GiWingfoot } from 'react-icons/gi';
import NavbarButtons from '../NavbarButtons/NavbarButtons';
import { Link } from 'react-router-dom';
import NavbarButton from '../NavbarButton/NavbarButton';
import { HOME_PATH, LOGIN_PATH, REGISTER_PATH } from '../../utils/paths';
// import SearchBar from './SearchBar/SearchBar';

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.navbar}>
      <Link className={classes.textLink} to={HOME_PATH} >
        <div className={classes.title}><GiWingfoot /> SWApp </div>
      </Link>
      <NavbarButtons>
        <Link className={classes.textLink} to={LOGIN_PATH}>
          <NavbarButton> Login </NavbarButton>
        </Link>
        <Link className={classes.textLink} to={REGISTER_PATH}>
          <NavbarButton> Register </NavbarButton>
        </Link>
      </NavbarButtons>
    </div>
  )
}
