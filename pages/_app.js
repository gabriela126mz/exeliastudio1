import '../styles/globals.css';
import Layout from '../components/Layout';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';

export default function App({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
