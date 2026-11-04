import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import ArticleList from '../components/article-list'
import styles from '../styles/home.module.css'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import { getSortedProjectsData } from '../lib/projects'
import { SHOW_RESUME } from '../lib/flags'

const CONNECTIONS = [
  { label: 'Email', href: 'mailto:pmk@khot.us', icon: 'fas fa-envelope' },
  { label: 'GitHub', href: 'https://github.com/mkpascal', icon: 'fab fa-github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mkpascal', icon: 'fab fa-linkedin-in' },
  { label: 'Threads', href: 'https://www.threads.net/@pmkpascal', icon: 'fas fa-at' },
  { label: 'Twitter', href: 'https://www.twitter.com/mkpascal', icon: 'fab fa-twitter' },
  { label: 'App Store', href: 'https://apps.apple.com/us/developer/pascal-muang-khot/id945834562', icon: 'fab fa-app-store-ios' },
  { label: 'Google Play', href: 'https://play.google.com/store/apps/dev?id=8406828041468545861', icon: 'fab fa-google-play' },
]

const PLATFORM_ICONS = {
  Windows: 'fab fa-windows',
  macOS: 'fab fa-apple',
  Linux: 'fab fa-linux',
  iOS: 'fab fa-app-store-ios',
  Android: 'fab fa-android',
}

const GAMES = [
  {
    name: 'Big Dumb Bash',
    href: 'https://www.program.gg/games/bigdumbbash',
    icon: 'fas fa-crosshairs',
    description: '3v3 party shooter',
    platforms: ['Windows', 'macOS', 'Linux'],
  },
  {
    name: 'WackyWackyWacky',
    href: 'https://www.program.gg/games/wackywackywacky',
    icon: 'fas fa-running',
    description: 'Platformer where the floor fights back',
    platforms: ['Windows', 'iOS', 'Android'],
  },
]

const SOFTWARE = [
  {
    name: 'Qust',
    href: 'https://github.com/mkpascal/qust/releases',
    icon: 'fas fa-music',
    description: 'Streaming radio player',
    platforms: ['Windows', 'macOS'],
  },
  {
    name: 'C9 Radio',
    href: 'https://apps.apple.com/us/app/c9-radio-au-rythme-des-hits/id6443767655',
    icon: 'fas fa-broadcast-tower',
    description: 'Radio station app',
    platforms: ['iOS'],
  },
]

const external = (href) =>
  href.startsWith('mailto:') ? {} : { target: '_blank', rel: 'noopener noreferrer' }

function SectionHead({ title, children }) {
  return (
    <div className={styles.sectionHead}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      {children}
    </div>
  )
}

function CardGrid({ items }) {
  return (
    <ul className={styles.cards}>
      {items.map(({ name, href, icon, description, platforms }) => (
        <li key={name}>
          <a className={styles.card} href={href} {...external(href)}>
            <span className={styles.cardTop}>
              <span className={styles.cardIcon}><i className={icon} aria-hidden="true"></i></span>
              <i className={`fas fa-arrow-right ${styles.cardArrow}`} aria-hidden="true"></i>
            </span>
            <span className={styles.cardName}>{name}</span>
            <span className={styles.cardDesc}>{description}</span>
            <span className={styles.chips}>
              {platforms.map((p) => (
                <span key={p} className={styles.chip}>
                  <i className={PLATFORM_ICONS[p]} aria-hidden="true"></i>{p}
                </span>
              ))}
            </span>
          </a>
        </li>
      ))}
    </ul>
  )
}

export default function Home({ allPostsData, allProjectsData }) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={styles.hero}>
        <div className={styles.heroText}>
          <h1 className={styles.srOnly}>Pascal MUANG KHOT</h1>
          <p className={styles.lead}>
            I’m a Senior Software Engineer at Unity, based in the San Francisco Bay Area, California, U.S.A. I'm fluent in English &amp; French.
          </p>
          <p className={styles.lead}>
            On the side, I build games and apps for fun.
          </p>
          {SHOW_RESUME && <p style={{ display: 'none' }}>I'm actively exploring back-end & full-stack site engineering opportunities, with a preference for Ruby on Rails positions. Check my resume out <Link href={`/resume`}>here</Link>. You can reach me via email at <a href="mailto:pmk@khot.us">pmk@khot.us</a>.</p>}
          <div className={styles.actions}>
            <a className={styles.btnPrimary} href="mailto:pmk@khot.us">Email me</a>
          </div>
        </div>
        <div className={styles.heroPhoto}>
          <span className={styles.photoGlow} aria-hidden="true"></span>
          <span className={styles.photoDots} aria-hidden="true"></span>
          <span className={styles.photoOrbit} aria-hidden="true"></span>
          <span className={styles.photoRing}>
            <Image
              priority
              src="/images/PASCAL_2026.jpg"
              alt="Pascal MUANG KHOT"
              width={640}
              height={640}
            />
          </span>
        </div>
      </section>

      <section className={styles.section}>
        <SectionHead title="Connections" />
        <ul className={styles.connections}>
          {CONNECTIONS.map(({ label, href, icon }) => (
            <li key={label}>
              <a className={styles.connection} href={href} {...external(href)}>
                <i className={icon} aria-hidden="true"></i>
                <span>{label}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.section}>
        <SectionHead title="Recent articles">
          <Link className={styles.sectionLink} href="/articles">View all articles <span aria-hidden="true">→</span></Link>
        </SectionHead>
        <ArticleList posts={allPostsData.slice(0, 3)} />
      </section>

      <section id="games" className={styles.section}>
        <SectionHead title="Games" />
        <CardGrid items={GAMES} />
      </section>

      <section id="software" className={styles.section}>
        <SectionHead title="Software" />
        <CardGrid items={SOFTWARE} />
      </section>

      <section style={{ display: 'none' }}>
        <h2>Projects / Past Experiences</h2>
        <ul className={`${utilStyles.list} row`}>
          {allProjectsData.map(({ id, title, logoPath }) => {
            const hasComma = title.includes(',');
            const [titleComma, urlComma] = title.split(',', 2);
            return (
              <li key={id} className="col-3">
                <Link href={hasComma ? `${urlComma}` : `/projects/${id}`}>
                  <Image
                    src={`${logoPath}`}
                    className={utilStyles.borderProjects}
                    height={128}
                    width={128}
                    alt={hasComma ? titleComma : title}
                    style={{ width: '100%', height: 'auto' }}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  const allProjectsData = getSortedProjectsData()

  return {
    props: {
      allPostsData,
      allProjectsData
    }
  }
}
