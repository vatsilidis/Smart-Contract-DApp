import React, { useCallback, useState } from "react";
import Web3 from "web3";

interface ErrorType {
  message: string;
  code: number;
}

const useWalletConnect = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const [connectButtonText, setConnectButtonText] =
    useState<string>("Connect Wallet");

  const [web3, setWeb3] = useState<Web3 | null>(null);

  React.useEffect(() => {
    console.log("web3", web3);
  }, [web3]);

  /**
   * Connect to the wallet
   * MetaMask should be installed in order to connect to the wallet
   * Instantiate the Web3 instance with MetaMask provider (window.ethereum) and enable the connection to the wallet
   * Then we can interact with the blockchain using the wallet address and the Web3 instance to sign transactions
   * by calling the smart contracts methods and send transactions to the blockchain
   *
   * @returns {Promise<void>}
   */

  const connectWallet = useCallback(async (): Promise<void> => {
    if ((window as any)?.ethereum) {
      // MetaMask is installed

      setLoading(true);

      // Reset the error message
      if (error) setError("");

      setConnectButtonText("Connecting...");

      try {
        await (window as any).ethereum.request({
          method: "eth_requestAccounts",
        });

        setWeb3(new Web3((window as any).ethereum));

        setConnectButtonText("Wallet Connected");
      } catch (error) {
        const typedError = error as ErrorType;
        console.error("Error:", typedError.message, typedError.code);
        setError(typedError.message);
        setConnectButtonText("Connect Wallet");
      }

      setLoading(false);
    } else {
      // MetaMask is not installed
      alert("MetaMask is not installed");
    }
  }, [error, setWeb3, setConnectButtonText, setError, setLoading]);

  return {
    error,
    loading,
    connectButtonText,
    walletIsConnected: web3 !== null,
    connectWallet,
    web3,
  };
};

export default useWalletConnect;
