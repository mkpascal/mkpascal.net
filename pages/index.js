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
            Hi. My name is <strong>Pascal</strong>. I’m a Senior Software Engineer located in San Francisco, CA, USA. My resume can be downloaded <a href="/resume.pdf">here</a>. You can reach me via email at <a href="mailto:pascal@khot.us">pascal@khot.us</a>.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
            <h2 className={utilStyles.headingLg2}>Connections
            <ul className={`${utilStyles.list} ${utilStyles.listConnections}`}>
                    <li className={`${utilStyles.listItem} ${utilStyles.listInLine}`}><Link href={`https://www.linkedin.com/in/mkpascal`}><i className="fab fa-linkedin"></i></Link></li>
                    <li className={`${utilStyles.listItem} ${utilStyles.listInLine}`}><Link href={`https://github.com/mkpascal`}><i className="fab fa-github"></i></Link></li>
            </ul>
            </h2>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}}`}>
            <h2 className={utilStyles.headingLg3}>Projects</h2>
            <ul className={`${utilStyles.list} row`}>
                {allProjectsData.map(({ id, title, logoPath }) => (
                    <li id={`${id}`} className={`${utilStyles.listItem} ${utilStyles.listInLine} col-3`}>
                        <Link href={`/projects/${id}`}>
                            <Image
                                src={`${logoPath}`}
                                className={utilStyles.borderProjects}
                                height={128}
                                width={128}
                                alt={title}
                                layout="responsive"
                            />
                        </Link>
                    </li>
                ))}
            </ul>
      </section>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg4}>Articles</h2>
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
            <li><Link className={utilStyles.readMoreLink} href="/articles">Read More →</Link></li>
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
