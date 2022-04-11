// import logo from './logo.svg';
// import React, { useState } from 'react';
import './App.css';
import Main from './Components/Main';
import Header from './Components/Header';
import Notification from './Components/Notification';
// import WalletCard from './Components/WalletCard';
import WalletCardEthers from'./Components/WalletCardEthers';

function App() {
  return (
    <div className="App">
      <audio id="song" controls preload="none">
        <source src="audio/song1.mp3" type="audio/mpeg" />
      </audio>
      {/* <WalletCard/> */}
      <WalletCardEthers/>
      <Notification />
      <Header />
      <Main />
    </div>
  );
}

export default App;
