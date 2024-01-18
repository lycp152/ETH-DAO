import { Sepolia } from "@thirdweb-dev/chains";
import {
  ConnectWallet,
  useAddress,
  useChain,
  useContract,
} from "@thirdweb-dev/react";
import type { NextPage } from "next";

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const address = useAddress();
  const chain = useChain();

  // テストネットが Sepolia ではなかった場合に警告を表示
  if (chain && chain.chainId !== Sepolia.chainId) {
    console.log("wallet address: ", address);
    console.log("chain name: ", chain.name);
    return (
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>Sepolia に切り替えてください⚠️</h1>
          <p>この dApp は Sepolia テストネットのみで動作します。</p>
          <p>ウォレットから接続中のネットワークを切り替えてください。</p>
        </main>
      </div>
    );
  } else {
    return (
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>Welcome to micoy Fashion DAO !!</h1>
          <div className={styles.connect}>
            <ConnectWallet />
          </div>
        </main>
      </div>
    );
  }
};

export default Home;
