import * as React from "react";
import Head from "next/head";

export default function HeaderMetadata(): React.JSX.Element {
  return (
    <Head>
      <title>Arya Dian Saputra&apos; Portfolio Website</title>

      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      />
      <meta
        name="subject"
        content="Arya Dian Saputra, Frontend Website"
      />
      <meta
        name="description"
        content="Hello Everyone👋 I'am Arya Dian Saputra. A Frontend Developer from Indonesia. This is my personal portfolio website that created using Next.js and Chakra UI"
      />
      <meta
        name="author"
        content="Arya Dian Saputra"
      />

      <link
        rel="icon"
        href="/favicon.ico"
      />
    </Head>
  );
}
