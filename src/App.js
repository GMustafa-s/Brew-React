import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Hero from './Components/Hero Section/Hero';
import Feature from './Components/01-Feature/Feature';
import CryptoWallet from './Components/02-CryptoWallet/CryptoWallet';
import Security from './Components/03-Security/Security';

function App() {
  return (
    <React.Fragment>
    <div className="App">

      <Header/>
      <Hero/>
      <Feature/>
      <CryptoWallet/>
      <Security/>
    </div>
    </React.Fragment>
  );
}

export default App;
