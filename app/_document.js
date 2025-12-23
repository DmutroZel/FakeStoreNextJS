import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <link href="https://fonts.googleapis.com/css?family=Pangolin:regular" rel="stylesheet" />
      <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.css' integrity='sha512-NhLySQDkiKSKnT+R795uaHWRQ7D3VuIvgeOLCK8cWq4w5fq4sWF90gj8eURpTqn/f1mFzqClpOz8JPlgVTLfFw==' crossorigin='anonymous'/>
      <Head />
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
