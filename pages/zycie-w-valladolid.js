import Layout from '../templates/Layout'
import Article from '../components/article'

export default function Home() {
  return (
    <Layout title="Życie w Valladolid">
      <Article
        title="Życie w Valladolid"
        text1="Zamieszaliśmy w Colegio Mayor Castilla-León. Wieczorami po praktykach często zwiedzaliśmy Valladolid. Bardzo spodobało nam się to miasto pod względem zarówno architektonicznym jak i rozrywkowym. Jesteśmy stałymi bywalcami miejskiej plaży gdzie chętnie zażywamy słonecznych kąpieli."
        text2="Niemal codzienne wieczorne spacery zaowocowały doskonałym poznaniem miasta. Poznaliśmy kulturę i zwyczaje naszych tutejszych rówieśników, a także spróbowaliśmy miejscowych specjałów."
      />
    </Layout>
  )
}
