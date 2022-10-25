import type { AppProps } from "next/app";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { WagmiConfig } from "wagmi";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chains, wagmiClient } from "$utils/rainbow";
import { GlobalStyles } from "styles/Global";
import { FontStyles } from "styles/Fonts";
import "antd/dist/antd.css";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

function getLibrary(provider: any): Web3Provider {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <Web3ReactProvider getLibrary={getLibrary}>
        <WagmiConfig client={wagmiClient}>
          <RainbowKitProvider chains={chains}>
            <FontStyles />
            <GlobalStyles />
            <Component {...pageProps} />
          </RainbowKitProvider>
        </WagmiConfig>
      </Web3ReactProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
