import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      {/* TODO: SHOULD TRY TO LOCALIZE TO ONLY PYTHON COURSES */}
      <Head>
        <script async src="https://cdn.jsdelivr.net/pyodide/v0.17.0/full/pyodide.js" />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
