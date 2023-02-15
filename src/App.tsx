import * as React from "react";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { Minter } from "./components/Minter";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <NavBar />
        <header className="App-header">
          <Minter />
        </header>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
