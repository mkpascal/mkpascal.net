import Link from 'next/link'
import { parseISO, format } from 'date-fns'
import styles from './article-list.module.css'

export default function ArticleList({ posts }) {
  return (
    <ul className={styles.panel}>
      {posts.map(({ id, date, title }) => (
        <li key={id}>
          <Link className={styles.row} href={`/posts/${id}`}>
            <span className={styles.title}>{title}</span>
            <time className={styles.date} dateTime={date}>{format(parseISO(date), 'MMM d, yyyy')}</time>
          </Link>
        </li>
      ))}
    </ul>
  )
}
