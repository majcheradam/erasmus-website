import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        © 2022{' '}
        <Link href="https://github.com/majcheradam">
          <a>Adam Majcher</a>
        </Link>
        . All rights reserved
      </p>
    </footer>
  )
}

export default Footer
