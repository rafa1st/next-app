import Head from "next/head";
import AvisoBoleto from "../src/components/AvisoBoleto";
//import PrintAviso from "../src/components/PrintAviso";
//import ChartKeyDT from "../src/components/ChartKeyDT";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Cadastro de Boletos</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <AvisoBoleto />        
      </main>

     {/*  <footer>
        <p>@rafa1st 2022</p>
      </footer> */}
    </div>
  );
}
