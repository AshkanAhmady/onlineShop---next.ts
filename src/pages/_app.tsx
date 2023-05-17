import '../../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@/containers/layout/Index'
import { Toaster } from 'react-hot-toast';
// import AuthProvider from '@/context/AuthContext';
import { wrapper } from 'src/redux/store';
import { useEffect } from 'react';
import { useStore } from 'react-redux';
import { loadUser } from 'src/redux/user/actions';


function MyApp({ Component, pageProps }: AppProps) {
  const store: any = useStore()

  useEffect(() => {
    loadUser(store)
  }, [])

  return (
    // <AuthProvider>
    <Layout>
      <Component {...pageProps} />
      <Toaster />
    </Layout>
    // </AuthProvider>
  )
}

export default wrapper.withRedux(MyApp)
