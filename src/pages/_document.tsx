import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="This is a solution to the Dictionary web app challenge on Frontend Mentor."
        />
        <link rel="icon" type="image/png" href="/images/favicon-32x32.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
