import type { AppProps } from "next/app";
import Image from "next/image";
import { NavBar } from "../components/Navbar";
import { Products } from "../components/Products";

import { Container, globalStyles } from "../styles/Global";

import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  globalStyles();

  return (
    <>
      <Head>
        <title>Dimension | Kanban Board</title>
      </Head>
      <Container>
        <NavBar />
        <Products />
        <Component {...pageProps} />
      </Container>
    </>
  );
}
