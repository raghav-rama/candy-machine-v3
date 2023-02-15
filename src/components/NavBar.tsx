import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import * as React from "react";
import logo from "../assets/img/logo.svg";
import styled from "@emotion/styled";

const WalletConnect = styled(WalletMultiButton)`
  background-color: #512da8;
  transition: all 0.2s ease-out;
  font-family: 'Courier Prime', monospace;
  &:hover {
    scale: 1.05;
    background-color: #322da877;
  }
  &:focus {
    scale: 1.05;
    background-color: #322da877;
  }
`;

const NavBar: React.FC = () => {
  return (
    <React.Fragment>
      <nav className="navbar"> 
        <img src={logo} className="App-logo" alt="logo" width={45} height={45} />
        <h1 className="heading-1">Mint some <span>weird eyes</span> idk</h1>
        <WalletConnect />
      </nav>
    </React.Fragment>
  );
};

export { NavBar };
