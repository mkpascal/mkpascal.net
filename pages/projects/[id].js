import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import styles from '../../styles/page.module.css'
import { getAllProjectIds, getProjectData } from '../../lib/projects'

export default function Project({ projectData }) {
  return (
    <Layout>
      <Head>
        <title>{projectData.title}</title>
      </Head>
      <article>
        <header className={styles.header}>
          {projectData.category && <p className={styles.eyebrow}>{projectData.category}</p>}
          <h1 className={styles.title}>{projectData.title}</h1>
        </header>
        <hr className={styles.divider} />
        <div className="prose" dangerouslySetInnerHTML={{ __html: projectData.contentHtml }} />
      </article>
      <Link className={styles.back} href="/">← Back to home</Link>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllProjectIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const projectData = await getProjectData(params.id)
  return {
    props: {
      projectData
    }
  }
}
