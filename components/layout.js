import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from './layout.module.css'

const name = 'Pascal MUANG KHOT'
export const siteTitle = 'Pascal MUANG KHOT'

const NAV = [
  { label: 'Articles', href: '/articles' },
  { label: 'Games', href: '/#games' },
  { label: 'Software', href: '/#software' },
]

export default function Layout({ children }) {
  return (
    <div className={styles.page}>
      <div className={styles.backdrop} aria-hidden="true">
        <span className={styles.backdropGlow}></span>
        <span className={styles.backdropDots}></span>
        <span className={styles.backdropGrain}></span>
      </div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Personal Website of Pascal MUANG KHOT" />
        <meta name="theme-color" content="#0a1628" />
        <meta property="og:image" content="https://www.mkpascal.net/images/PASCAL_2026.jpg" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <header className={styles.nav}>
        <div className={styles.navInner}>
          <Link href="/" className={styles.brand}>
            <Image src="/images/PASCAL_2026.jpg" alt="" width={28} height={28} className={styles.brandAvatar} />
            <span>{name}</span>
          </Link>
          <nav className={styles.navLinks} aria-label="Main">
            {NAV.map(({ label, href }) => (
              <Link key={label} href={href}>{label}</Link>
            ))}
          </nav>
          <a className={styles.navCta} href="mailto:pmk@khot.us">
            <i className="fas fa-envelope" aria-hidden="true"></i>
            <span>Get in touch</span>
          </a>
        </div>
      </header>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <span>© {new Date().getFullYear()} {name}</span>
        </div>
      </footer>
    </div>
  )
}
