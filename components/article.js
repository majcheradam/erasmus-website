import Image from 'next/image'

const Article = ({ title }) => {
  return (
    <div className="subpage-container">
      <div className="subpage-text">
        <h1>{title}</h1>
        <p>
          Artykuł w trakcie pisania... Lorem Ipsum has been the standard dummy
          text ever since the 1500s, when an unknown printer took a galley of
          type and scrambled it to make a type specimen book.
          <br />
          <br />
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised word
        </p>
      </div>
      <Image src="/Image3.png" alt="" width="345" height="476" />
    </div>
  )
}

export default Article
