import "@/styles/globals.scss";
import { Web3ModalProvider } from "@/config/web3modal-provider";

export default function App({ Component, pageProps }) {
  return (
    <Web3ModalProvider>
      <Component {...pageProps} />
    </Web3ModalProvider>
  );
}
