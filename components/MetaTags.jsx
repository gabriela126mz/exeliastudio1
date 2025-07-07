import Head from "next/head";

export default function MetaTags({
  title = "Exelia Studio | Agencia de Marketing Digital",
  description = "Creamos campañas efectivas, automatizamos ventas y diseñamos experiencias digitales que convierten. Agencia boutique desde Madrid para el mundo.",
  url = "https://www.exeliastudio.com/",
  image = "https://www.exeliastudio.com/logofinal.png",
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
}
