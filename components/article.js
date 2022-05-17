import Image from 'next/image'

const Article = ({ title, text1, text2 }) => {
  return (
    <div className="subpage-container main-container">
      <div className="subpage-text">
        <h1>{title}</h1>
        <p>
          {text1}
          <br />
          <br />
          {text2}
        </p>
      </div>
      <Image src="/Image3.png" alt="" width="345" height="476" />
    </div>
  )
}

export default Article
