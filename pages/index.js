import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import { getSortedProjectsData } from '../lib/projects'
import Link from 'next/link'
import Date from '../components/date'
import Image from "next/image";

export default function Home({ allPostsData, allProjectsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd}`}>
        <p className={utilStyles.topP}>
            I’m a Senior Software Engineer located in the San Francisco Bay Area, California, U.S.A. I'm fluent in English & French.
            <span style={{ display: 'none'; }} className={utilStyles.spanTop}>I'm actively exploring back-end & full-stack site engineering opportunities, with a preference for Ruby on Rails positions. Check my resume out <Link href={`/resume`}>here</Link>. You can reach me via email at <a href="mailto:pmk@khot.us">pmk@khot.us</a>.</span>
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
            <h2 className={utilStyles.headingLg2}>Connections
            <ul className={`${utilStyles.list} ${utilStyles.listConnections}`}>
                    <li className={`${utilStyles.listItem} ${utilStyles.listInLine}`}><Link href={`mailto:pmk@khot.us`}><i className="fas fa-envelope"></i></Link></li>
                    <li className={`${utilStyles.listItem} ${utilStyles.listInLine}`}><Link target="_blank" href={`https://www.threads.net/@pmkpascal`}><i className="fas fa-at"></i></Link></li>
                    <li className={`${utilStyles.listItem} ${utilStyles.listInLine}`}><Link target="_blank" href={`https://www.twitter.com/mkpascal`}><i className="fab fa-twitter"></i></Link></li>
                    <li className={`${utilStyles.listItem} ${utilStyles.listInLine}`}><Link target="_blank" href={`https://www.linkedin.com/in/mkpascal`}><i className="fab fa-linkedin"></i></Link></li>
                    <li className={`${utilStyles.listItem} ${utilStyles.listInLine}`}><Link target="_blank" href={`https://github.com/mkpascal`}><i className="fab fa-github"></i></Link></li>
            </ul>
            </h2>
      </section>
      <section style={{ display: 'none'; }} className={`${utilStyles.headingMd} ${utilStyles.padding1px}}`}>
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
      <section style={{ margin: '35px 0 20px' }} className={`${utilStyles.headingMd} ${utilStyles.padding1px}}`}>
            <h2 className={utilStyles.headingLg3}>Software</h2>
            <ul className={`${utilStyles.list} row`}>
            <li className={`${utilStyles.listItem} ${utilStyles.listInLine}`}> 
              <Link target="_blank" href={`https://apps.apple.com/us/developer/pascal-muang-khot/id945834562`}>
                <Image src={`https://www.mkpascal.net/images/astoresoft.png`} height={200} width={59} style={{ width: '40%', height: 'auto', float: 'left', margin: '0 30px 0 0' }} />
              </Link>
              <Link target="_blank" href={`https://play.google.com/store/apps/dev?id=8406828041468545861`}>
                <Image src={`https://www.mkpascal.net/images/gplaysoft.png`} height={200} width={59} style={{ width: '40%', height: 'auto', float: 'left', margin: '0 0 15px 0' }} />
              </Link>              
            </li>
            <li className={`${utilStyles.listItem} ${utilStyles.listInLine}`}><Link target="_blank" href={`https://github.com/mkpascal/qust/releases`}><i className="fas fa-music"></i>  Qust </Link><small style={{color: '#666', fontSize: '0.75em'}}>Simple And Efficient Streaming Radio Player ( <i className="fab fa-windows"></i> / <i className="fab fa-apple"></i> )</small></li>
            <li className={`${utilStyles.listItem} ${utilStyles.listInLine}`}><Link target="_blank" href={`https://www.c9.fr/files/software/R2PT-win32-x64-build-0002.zip`}><i className="fas fa-box"></i>  R2PT </Link><small style={{color: '#666', fontSize: '0.75em'}}>Companion App For The Rodecaster Pro 2 ( <i className="fab fa-windows"></i> )</small></li>
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
