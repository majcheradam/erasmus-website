import Layout from '../templates/Layout'
import Article from '../components/article'
import StudentsGrid from '../components/students-grid'

export default function Home() {
  return (
    <Layout title="Uczestnicy">
      <Article
        title="Uczestnicy"
        text1="Jesteśmy grupą 15 osobową z 5 szkół wchodzących w konsorcjum którego
        organizatorem jest Edu-It w Rzeszowie. W skład naszego konsorcjum wchodzą:"
        text2=""
        image="/Image6.png"
      />
      <StudentsGrid />
    </Layout>
  )
}
