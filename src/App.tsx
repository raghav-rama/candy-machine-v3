import * as React from 'react';
import './App.css';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
import { Minter } from './components/Minter';

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <Minter />
      </header>
      <Footer />
    </div>
  );
}

export default App;
