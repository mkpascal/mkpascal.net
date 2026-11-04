import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import ArticleList from '../components/article-list'
import styles from '../styles/page.module.css'
import { getSortedPostsData } from '../lib/posts'

export default function Articles({ allPostsData }) {
  return (
    <Layout>
      <Head>
        <title>{`Articles · ${siteTitle}`}</title>
      </Head>
      <header className={styles.header}>
        <p className={styles.eyebrow}>{allPostsData.length} articles</p>
        <h1 className={styles.title}>Articles</h1>
      </header>
      <ArticleList posts={allPostsData} />
    </Layout>
  )
}

export async function getStaticProps() {
  return {
    props: {
      allPostsData: getSortedPostsData()
    }
  }
}
