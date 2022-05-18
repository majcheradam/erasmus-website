import Layout from '../templates/Layout'
import Article from '../components/article'
export default function Home() {
  return (
    <Layout title="Praktyka zawodowa">
      <Article
        title="Praktyka zawodowa"
        text1="Zostaliśmy rozmieszczeniu przez naszych koordynatorów do różnych firm związanych z naszymi profilami nauki, między innymi: technik informatyk, technik informatyk, technik mechanik lotniczy. Codziennie odbywaliśmy 6 godzin praktyk w wyznaczonych firmach."
        text2="Rozwijaliśmy nasze zainteresowania związane z kierunkami kształcenia jednocześnie realizując cele i założenia projektu. Współpracownicy wspierali nas w nauce zawodu i pomagali przezwyciężyć napotkane trudności."
        image="/Image4.png"
      />
    </Layout>
  )
}
