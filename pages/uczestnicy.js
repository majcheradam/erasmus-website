import Layout from '../templates/Layout'
import Article from '../components/article'
import StudentsGrid from '../components/students-grid'

export default function Home() {
  return (
    <Layout title="Uczestnicy">
      <Article
        title="Uczestnicy"
        text1="W trakcie pisania..."
        text2="W trakcie pisania..."
        image="/Image6.png"
      />
      <StudentsGrid />
    </Layout>
  )
}
