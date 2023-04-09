import { ThirdwebProvider } from "@thirdweb-dev/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import Header from "../components/Header";
import ThirdwebGuideFooter from "../components/GithubLink";
import "../styles/globals.css";

// This is the chain your dApp will work on.
const activeChain = "mumbai";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider activeChain={activeChain}>
      <Head>
        <title>AKÖRA</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="AKÖRA Record est une plateforme de marché en ligne (Web3) spécialisée dans l'achat et la vente de NFTs musicaux.
            Découvrez des créations uniques de vos artistes préférés et ajoutez des morceaux exclusifs à votre collection musicale.
            Rejoignez dès maintenant notre communauté passionnée de musique."
        />
        <meta
          name="keywords"
          content="Music, Marketplace, NFT Marketplace, NFT Auction, Buy NFT, Artist, Web3, Dapp, AKÖRA"
        />
      </Head>
      <Header />
      <Component {...pageProps} />
      <ThirdwebGuideFooter />
    </ThirdwebProvider>
  );
}

export default MyApp;
