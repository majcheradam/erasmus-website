import Image from 'next/image'

const Article = ({ title, text1, text2, image }) => {
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
      <Image src={image} alt={title} width="345" height="476" />
    </div>
  )
}

export default Article
