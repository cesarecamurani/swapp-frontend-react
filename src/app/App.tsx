import React from 'react';
import './App.scss';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import LoginForm from '../components/LoginForm/LoginForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <LoginForm />
      <Footer />
    </div>
  );
}

export default App;
