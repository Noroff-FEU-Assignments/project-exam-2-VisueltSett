import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';
import GlobalStyles from '.././styles/globalStyles';
import type { AppProps } from 'next/app';
import Layout from '../project/components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <GlobalStyles />
      <Component {...pageProps} />;
    </Layout>
  );
}

export default MyApp;
