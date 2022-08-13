import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Hero from './Components/Hero Section/Hero';
import Feature from './Components/01-Feature/Feature';
import CryptoWallet from './Components/02-CryptoWallet/CryptoWallet';
import Security from './Components/03-Security/Security';
import Future from './Components/04-future/Future';
import GetStarted from './Components/05-GetStarted/GetStarted';
import About from './Components/06-About/About';
import Latest from './Components/07-latest/Latest';
import Download from './Components/Download/Download';
import Last from './Components/Last/Last';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <React.Fragment>
    {/* <div className="App"> */}

      <Header/>
      <Hero/>
      <Feature/>
      <CryptoWallet/>
      <Security/>
      <Future/>
      <GetStarted/>
      <About/>
      <Latest/>
      <Download/>
      <Last/>
      <Footer/>
    {/* </div> */}
    </React.Fragment>
  );
}

export default App;
