// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" type="image/png" sizes="192x192" href="/512.png" />
        <link rel="apple-touch-icon" href="/512.png" />
        <meta name="theme-color" content="#ffffff" />


      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
