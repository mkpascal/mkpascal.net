import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import Date from '../../components/date'
import styles from '../../styles/page.module.css'
import { getAllPostIds, getPostData } from '../../lib/posts'

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <header className={styles.header}>
          <p className={styles.eyebrow}><Date dateString={postData.date} /></p>
          <h1 className={styles.title}>{postData.title}</h1>
        </header>
        <hr className={styles.divider} />
        <div className="prose" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
      <Link className={styles.back} href="/articles">← All articles</Link>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}
