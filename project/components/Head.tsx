import NextHead from 'next/head';

type HeadProps = { title: string };

export default function Head({ title = '' }: HeadProps) {
  return (
    <NextHead>
      <title>
        {' '}
        {title} {title ? '|' : ''} Osebro Antikvariat
      </title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta
        name="description"
        content="Osebro Antikvariat - antikvariske og brukte bøker på nett og i butikk"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="../../.././favicon_io/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="../../.././favicon_io/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="../../.././favicon_io/favicon-16x16.png"
      />
      <link rel="manifest" href="../../.././favicon_io/site.webmanifest" />
    </NextHead>
  );
}
