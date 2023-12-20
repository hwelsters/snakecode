import type { AppProps } from "next/app";

import PyodideProvider from "@/providers/pyodide-provider";
import initialize from "@/services/initialize";

import "@/styles/globals.css";

initialize();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PyodideProvider>
      <Component {...pageProps} />
    </PyodideProvider>
  );
}
