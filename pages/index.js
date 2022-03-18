import Head from "next/head";
import AvisoBoleto from "../src/components/AvisoBoleto";
import Component from "../src/components/Component";
import styles from "../src/styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>      
        <Component />
        <AvisoBoleto />
      </main>

      <footer className={styles.footer}>
        <p>@rafa1st 2022</p>
      </footer>
    </div>
  );
}
