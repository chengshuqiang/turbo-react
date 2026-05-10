import { CodeBlock } from './CodeBlock'
import styles from '@/styles/components/grid-card.module.css'

interface GridCardProps {
  title: string
  children: string
}

export function GridCard({ title, children }: GridCardProps) {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <CodeBlock>{children}</CodeBlock>
    </div>
  )
}
