import GlobalStyles from '.././styles/globalStyles';
import type { AppProps } from 'next/app';
import Layout from '../project/components/Layout';
import { theme } from '../styles/theme';
import { ThemeProvider } from 'styled-components';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Layout>
  );
}

export default MyApp;
