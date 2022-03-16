import { Layout } from 'components/Layout';
import { Toaster } from 'react-hot-toast';
import { Provider } from '../context';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider>
      <Layout>
        <Component {...pageProps} />
        <Toaster
          position='bottom-right'
          toastOptions={{
            style: {
              borderRadius: '10px',
              background: '#333',
              color: '#fff',
            },
          }}
        />
      </Layout>
    </Provider>
  );
};

export default MyApp;
