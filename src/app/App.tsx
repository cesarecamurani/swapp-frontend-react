import React from 'react';
import './App.scss';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <Footer />
    </div>
  );
}

export default App;
