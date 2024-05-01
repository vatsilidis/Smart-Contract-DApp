import type { AppProps } from "next/app";

import NavBar from "@/components/NavBar";
import NextHeader from "@/components/NextHeader";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/basic.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextHeader
        title="Web3 Ethereum app"
        description="A Web3.js app using Next.js and Typescript"
      />
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}
