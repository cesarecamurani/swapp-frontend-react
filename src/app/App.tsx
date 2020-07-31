import React from 'react';
import useStyles from './styles';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <Navbar />

      <Footer />
    </div>
  );
}
