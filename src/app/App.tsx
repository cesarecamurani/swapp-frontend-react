import React from 'react';
import './App.scss';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import LoginForm from '../components/LoginForm/LoginForm';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <LoginForm />
      <Footer />
    </div>
  );
}

export default App;
