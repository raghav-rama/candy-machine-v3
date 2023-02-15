import * as React from "react";
import WalletConnect, { useWalletConnectTheme } from "./theme/WalletConnect";

type ThemeContextType = ReturnType<typeof useWalletConnectTheme>;

export const ThemeContext = React.createContext<ThemeContextType>({
  WalletMultiButton: WalletConnect,
});

type ChildrenType = {
  children?: React.ReactElement | React.ReactElement[] | undefined;
};

export const ThemeProvider = ({
  children,
}: ChildrenType): React.ReactElement => {
  const theme = useWalletConnectTheme();
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
