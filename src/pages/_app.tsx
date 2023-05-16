import '../../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@/containers/layout/Index'
import { Toaster } from 'react-hot-toast';
import AuthProvider from '@/context/AuthContext';
import { wrapper } from 'src/redux/store';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
        <Toaster />
      </Layout>
    </AuthProvider>
  )
}

export default wrapper.withRedux(MyApp)
