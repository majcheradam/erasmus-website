import Layout from '../templates/Layout'
import Article from '../components/article'
export default function Home() {
  return (
    <Layout title="Wycieczki">
      <Article
        title="Wycieczki"
        text1="Projekt oprócz nauki zawodowej obejmował również dla nas atrakcje w postaci wycieczek. Pierwsza z nich zaprowadziła nas do Pałacu Królewskiego w La Granja de San Ildefonso, na której zwiedziliśmy malownicze ogrody wokół dawnego pałacu."
        text2="Druga ze zorganizowanych wycieczek była wyjazdem nad ocean, gdzie po niemal trzech tygodniach intensywnych praktyk wypoczeliśmy i zrelaksowaliśmy się korzystając z wody i pięknej pogody."
        image="/Image5.webp"
      />
    </Layout>
  )
}
