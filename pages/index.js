import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import { getSortedProjectsData } from '../lib/projects'
import Link from 'next/link'
import Date from '../components/date'
import Image from "next/image";
import { SHOW_RESUME } from '../lib/flags'

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

export default function Home({ allPostsData, allProjectsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd}`}>
        <p className={utilStyles.topP}>
            I’m a Senior Software Engineer at Unity, based in the San Francisco Bay Area, California, U.S.A. I'm fluent in English & French.
            {SHOW_RESUME && <span style={{ display: 'none' }} className={utilStyles.spanTop}>I'm actively exploring back-end & full-stack site engineering opportunities, with a preference for Ruby on Rails positions. Check my resume out <Link href={`/resume`}>here</Link>. You can reach me via email at <a href="mailto:pmk@khot.us">pmk@khot.us</a>.</span>}
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
            <h2 className={`${utilStyles.headingLg2} ${utilStyles.connectionsHeading}`}>Connections
            <ul className={`${utilStyles.list} ${utilStyles.listConnections}`}>
                    <li><Link href={`mailto:pmk@khot.us`}><i className="fas fa-envelope"></i></Link></li>
                    <li><Link target="_blank" href={`https://www.threads.net/@pmkpascal`}><i className="fas fa-at"></i></Link></li>
                    <li><Link target="_blank" href={`https://www.twitter.com/mkpascal`}><i className="fab fa-twitter"></i></Link></li>
                    <li><Link target="_blank" href={`https://www.linkedin.com/in/mkpascal`}><i className="fab fa-linkedin"></i></Link></li>
                    <li><Link target="_blank" href={`https://github.com/mkpascal`}><i className="fab fa-github"></i></Link></li>
                    <li><Link target="_blank" href={`https://apps.apple.com/us/developer/pascal-muang-khot/id945834562`}><i className="fab fa-app-store-ios"></i></Link></li>
                    <li><Link target="_blank" href={`https://play.google.com/store/apps/dev?id=8406828041468545861`}><i className="fab fa-google-play"></i></Link></li>
            </ul>
            </h2>
      </section>
      <section style={{ display: 'none' }} className={`${utilStyles.headingMd} ${utilStyles.padding1px}}`}>
            <h2 className={utilStyles.headingLg3}>Projects / Past Experiences</h2>
            <ul className={`${utilStyles.list} row`}>
            {allProjectsData.map(({ id, title, logoPath }) => {
                const hasComma = title.includes(',');
                const [titleComma, urlComma] = title.split(',', 2);

                return (
                    <li key={id} className={`${utilStyles.listItem} ${utilStyles.listInLine} col-3`}>
                        {hasComma ? (
                            <Link href={`${urlComma}`}>
                            <Image
                                src={`${logoPath}`}
                                className={utilStyles.borderProjects}
                                height={128}
                                width={128}
                                alt={titleComma}
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                }}
                            />
                            </Link>
                        ) : (
                            <Link href={`/projects/${id}`}>
                                <Image
                                    src={`${logoPath}`}
                                    className={utilStyles.borderProjects}
                                    height={128}
                                    width={128}
                                    alt={title}
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                    }}
                                />
                            </Link>
                        )}
                    </li>
                );
            })}
        </ul>
      </section>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg4}>Articles <small><Link className={utilStyles.readMoreLink} style={{ display: 'inline', color: '#4d4d4d' }} href="/articles">Read More →</Link></small></h2>
        <ul className={utilStyles.list}>
          {allPostsData.slice(0,3).map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
      {[
        { title: 'Games', items: GAMES },
        { title: 'Software', items: SOFTWARE },
      ].map(({ title, items }) => (
        <section key={title} className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg4}>{title}</h2>
          <ul className={utilStyles.list}>
            {items.map(({ name, href, icon, description, platforms }) => (
              <li key={name} className={utilStyles.appItem}>
                <span className={utilStyles.appIcon}><i className={icon} aria-hidden="true"></i></span>
                <div className={utilStyles.appBody}>
                  <Link className={utilStyles.appName} target="_blank" href={href}>{name}</Link>
                  <span className={utilStyles.appPlatforms}>{platforms.join(' · ')}</span>
                  <small className={utilStyles.appDesc}>{description}</small>
                </div>
              </li>
            ))}
          </ul>
        </section>
      ))}
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
