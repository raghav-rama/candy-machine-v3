import * as React from "react";
import logo from "../assets/img/logo.svg";
import { useWalletConnectButton } from "../hooks/useWalletConnectButton";

const NavBar: React.FC = () => {
  const { WalletMultiButton } = useWalletConnectButton();
  return (
    <React.Fragment>
      <nav className="navbar"> 
        <img src={logo} className="App-logo" alt="logo" width={45} height={45} />
        <h1 className="heading-1">Mint some <span>weird eyes</span> idk</h1>
        <WalletMultiButton />
      </nav>
    </React.Fragment>
  );
};

export { NavBar };
