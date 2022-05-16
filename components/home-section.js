import Image from 'next/image'

const HomeSection = () => {
  return (
    <section className="home-section" id="home-section">
      <p className="home-section-title">Poznaj naszą przygodę</p>
      <div className="flex space-between articles-container">
        <a href="zycie-w-valladolid">
          <div>
            <Image src="/Image3.png" alt="" width="345" height="476" />
            <div className="space-between">
              <p>Życie w Valladoid</p>
              <Image src="/arrow.svg" alt="" width="11" height="17" />
            </div>
          </div>
        </a>
        <a href="praktyka-zawodowa">
          <div>
            <Image src="/Image4.png" alt="" width="345" height="476" />
            <div className="space-between">
              <p>Praktyka zawodowa</p>
              <Image src="/arrow.svg" alt="" width="11" height="17" />
            </div>
          </div>
        </a>
        <a href="wycieczki">
          <div>
            <Image src="/Image5.png" alt="" width="345" height="476" />
            <div className="space-between">
              <p>Wycieczki</p>
              <Image src="/arrow.svg" alt="" width="11" height="17" />
            </div>
          </div>
        </a>
      </div>
    </section>
  )
}

export default HomeSection
