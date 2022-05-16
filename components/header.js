import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <div className="main-container">
      <header>
        <Link href="/">
          <a className="logo">
            <Image
              src="/logo.svg"
              alt="erasmus+ logo"
              width="164.57"
              height="52"
            />
          </a>
        </Link>
        <nav className="navbar center">
          <Link href="zycie-w-valladolid">
            <a>Życie w Valladolid </a>
          </Link>
          <Link href="praktyka-zawodowa">
            <a>Praktyka zawodowa</a>
          </Link>
          <Link href="wycieczki">
            <a> Wycieczki </a>
          </Link>
          <Link href="uczestnicy">
            <a>Uczensticy</a>
          </Link>
        </nav>
        <div className="languages-container">
          <Link href="https://edu-it.com.pl/">
            <a>Edu-IT</a>
          </Link>
        </div>
        <button type="button" className="hamburger">
          <Image src="/Vector.svg" alt="" width="30" height="24" />
        </button>
      </header>
    </div>
  )
}
export default Header
