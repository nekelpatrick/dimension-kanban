import type { AppProps } from "next/app";
import Image from "next/image";
import { NavBar } from "../components/NavBar";
import { Products } from "../components/Products";

import { Container, globalStyles } from "../styles/Global";
import { Header } from "../styles/pages/app";

export default function App({ Component, pageProps }: AppProps) {
  globalStyles();

  return (
    <>
      <Container>
        <NavBar />
        <Products />
        <Component {...pageProps} />
      </Container>
    </>
  );
}
