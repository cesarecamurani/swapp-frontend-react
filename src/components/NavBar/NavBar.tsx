import React from 'react';
import useStyles from './styles';
import { FaHandsHelping } from 'react-icons/fa';
// import { GiWingfoot } from 'react-icons/gi';
import NavBarButtons from '../NavbarButtons/NavbarButtons';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import NavBarButton from '../NavbarButton/NavbarButton';
import { HOME_PATH, LOGIN_PATH, REGISTER_PATH } from '../../paths';
// import SearchBar from './SearchBar/SearchBar';

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.navbar}>
      <Router>
        <Link className={classes.textLink} to={HOME_PATH} >
          <div className={classes.title}><FaHandsHelping /> SWApp </div>
        </Link>
        {/* <GiWingfoot /> */}
        <NavBarButtons>
          <Link className={classes.textLink} to={LOGIN_PATH}>
            <NavBarButton> Login </NavBarButton>
          </Link>
          <Link className={classes.textLink} to={REGISTER_PATH}>
            <NavBarButton> Create a new account </NavBarButton>
          </Link>
        </NavBarButtons>
      </Router>
    </div>
  )
}
