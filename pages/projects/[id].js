import Layout from '../../components/layout'
import { getAllProjectIds, getProjectData } from '../../lib/projects'
import Head from 'next/head'
import utilStyles from '../../styles/utils.module.css'

export default function Post({ projectData }) {
    return (
        <Layout>
            <Head>
                <title>{projectData.title}</title>
            </Head>
            <article>
                <h1 className={utilStyles.headingXl}>{projectData.title} <span className={`${utilStyles.topBadge} badge ${projectData.categoryClass}`}>{projectData.category}</span></h1>
                <div dangerouslySetInnerHTML={{ __html: projectData.contentHtml }} />
            </article>
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
