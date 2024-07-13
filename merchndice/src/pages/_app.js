import "@/styles/globals.scss";
import { Web3ModalProvider } from "@/config/web3modal-provider";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Web3ModalProvider>
        <Component {...pageProps} />
      </Web3ModalProvider>
    </SessionProvider>
  );
}
