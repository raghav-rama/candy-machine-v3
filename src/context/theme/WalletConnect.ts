import styled, { StyledComponent } from "@emotion/styled";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { ButtonProps } from "@solana/wallet-adapter-react-ui/lib/types/Button";

export type ThemeType = {
    WalletMultiButton: StyledComponent<ButtonProps>;
}

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

export const useWalletConnectTheme = (theme?: ThemeType) => {
    return {
        ...theme,
        WalletMultiButton: WalletConnect
    };
}

export default WalletConnect;