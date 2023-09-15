import Layout from '@/component/Layout'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <div className="container">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}
