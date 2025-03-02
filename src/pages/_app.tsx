import { Sepolia } from "@thirdweb-dev/chains";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import type { AppProps } from "next/app";

import { HeadComponent } from "./components/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider activeChain={Sepolia}>
      <HeadComponent />
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
