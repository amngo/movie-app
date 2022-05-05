import { Layout } from "components/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: { Component: any; pageProps: any }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
