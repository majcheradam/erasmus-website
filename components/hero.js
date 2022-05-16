import Image from 'next/image'

const Hero = () => {
  return (
    <div className="main-container hero-container">
      <div className="hero-text">
        <p>2021-1-PL01-KA121-VET-000021185</p>
        <h1>Erasmus+ Valladolid</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the
        </p>
      </div>

      <div className="hero-images">
        <div className="first-photo">
          <Image
            src="/Image1.png"
            alt=""
            height="430"
            width="358"
            objectFit="contain"
          />
        </div>
        <div className="second-photo">
          <Image
            src="/Image2.png"
            alt=""
            height="430"
            width="358"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
