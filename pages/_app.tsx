import GlobalStyles from '.././styles/globalStyles';
import type { AppProps } from 'next/app';
import Layout from '../project/components/generalLayout/Layout';
import theme from '.././styles/theme/index';
import { ThemeProvider } from 'styled-components';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <GlobalStyles />
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
