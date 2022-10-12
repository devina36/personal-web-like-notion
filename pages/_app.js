import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import Layout from './component/Layout';
import { AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <AnimatePresence exitBeforeEnter>
        <Layout>
          <Component {...pageProps} key={pageProps} />
        </Layout>
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default MyApp;
