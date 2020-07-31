import React from 'react';
import useStyles from './styles';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import LoginForm from '../components/LoginForm/LoginForm';

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <Navbar />
      <LoginForm />
      <Footer />
    </div>
  );
}
