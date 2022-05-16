import Layout from '../templates/Layout'
import Hero from '../components/hero'
import HomeSection from '../components/home-section'

export default function Home() {
  return (
    <Layout title="Strona główna">
      <Hero />
      <HomeSection />
    </Layout>
  )
}
