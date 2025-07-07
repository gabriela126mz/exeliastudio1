import Head from "next/head";

export default function MetaTags({
  title = "Exelia Studio | Creatividad con propósito",
  description = "Tu idea, nuestra estrategia. Hacemos crecer tu marca con propósito.",
  image = "https://www.exeliastudio.com/logoshare.png",
  url = "https://www.exeliastudio.com/",
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="https://www.exeliastudio.com/logoshare.png" />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
}
