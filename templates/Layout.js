import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'

const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>{title} | ErasmusWebsite</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  )
}

export default Layout
