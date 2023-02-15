import * as React from "react";
import { ThemeContext } from "../context/ThemeContext";
import { ThemeType } from "../context/theme/WalletConnect";

export const useWalletConnectButton = (theme?: ThemeType) => {
  const { WalletMultiButton } = React.useContext(ThemeContext);
  return {
    WalletMultiButton,
  };
};
