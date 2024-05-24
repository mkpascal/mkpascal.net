import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.large.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Pascal MUANG KHOT'
export const siteTitle = 'Pascal MUANG KHOT'

export default function LayoutLarge({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Personal Website of Pascal MUANG KHOT"
        />
        <meta
          property="og:image"
          content="https://www.mkpascal.net/images/PASCAL_LAST_MAY.jpg"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/PASCAL_LAST_MAY.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={`${utilStyles.headingXl} ${utilStyles.blueMainColor}`}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/PASCAL_LAST_MAY.jpg"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt={name}
              />
            </Link>
            <h2 className={`${utilStyles.headingLg} ${utilStyles.blueMainColor}`}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  )
}
