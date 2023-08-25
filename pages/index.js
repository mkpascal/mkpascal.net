import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
            Hi. My name is <strong>Pascal</strong>. I’m a Senior Software Engineer located in San Francisco, CA, USA. My resume can be downloaded <a href="/resume.pdf">here</a>. You can reach me via email at <a href="mailto:pascal@khot.us">pascal@khot.us</a>.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
            <h2 className={utilStyles.headingLg}>Connections</h2>
            <ul className={utilStyles.list}>
                    <li className={`${utilStyles.listItem} ${utilStyles.listInLine}`}><Link href={`https://www.linkedin.com/in/mkpascal`}>LinkedIn</Link></li>
                    <li className={`${utilStyles.listItem} ${utilStyles.listInLine}`}><Link href={`https://github.com/mkpascal`}>GitHub</Link></li>
            </ul>
        </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Articles</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
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
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
