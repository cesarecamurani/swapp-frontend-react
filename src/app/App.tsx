import React from 'react';
import useStyles from './styles';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Routes from '../routing/Routes';

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <Navbar />
      <Routes />
      <Footer />
    </div>
  );
}
