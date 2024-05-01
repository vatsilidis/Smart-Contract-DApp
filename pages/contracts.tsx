import React from "react";
import NextHeader from "@/components/NextHeader";

import RowColCenter from "@/components/RowColCenter";
import { NextPage } from "next";
import { Alert, Button, Container } from "react-bootstrap";
import useWalletConnect from "@/hooks/useWalletConnect";

const ContractsPage: NextPage = () => {
  const {
    web3,
    error,
    loading,
    connectWallet,
    connectButtonText,
    walletIsConnected,
  } = useWalletConnect();

  return (
    <>
      <NextHeader title="Contracts" description="Contracts page" />
      <Container>
        <RowColCenter className="w-100 my-4">
          <h1>Contracts page</h1>
        </RowColCenter>

        {error && (
          <RowColCenter className="w-100 mt-4">
            <Alert variant="danger" className="w-100">
              {error}
            </Alert>
          </RowColCenter>
        )}

        {!walletIsConnected && (
          <RowColCenter className="w-100 my-4">
            <Button
              variant="success"
              onClick={connectWallet}
              disabled={loading || walletIsConnected}
            >
              {connectButtonText}
            </Button>
          </RowColCenter>
        )}

        {web3 && (
          <>
            <RowColCenter className="w-100 my-4">
              <Alert variant="success" className="w-100">
                Wallet connected
              </Alert>
            </RowColCenter>
            <RowColCenter className="my-2">
              Wallet config:&nbsp;
              <strong>{web3.config.defaultHardfork}</strong>
            </RowColCenter>

            <RowColCenter className="my-2">
              Wallet default Chain:&nbsp;
              <strong>{web3.config.defaultChain}</strong>
            </RowColCenter>

            <RowColCenter className="my-2">
              Wallet default block:&nbsp;
              <strong>{web3.config.defaultBlock}</strong>
            </RowColCenter>

            <RowColCenter className="w-100 my-4">
              <Button
                variant="primary"
                onClick={async () => {
                  const accounts = await web3.eth.getAccounts();
                  console.log("Accounts", accounts);
                }}
              >
                Get accounts
              </Button>
            </RowColCenter>
          </>
        )}
      </Container>
    </>
  );
};

export default ContractsPage;
