import styles from '@/styles/components/type-card.module.css'

interface TypeCardProps {
  title: string
  children: string
}

export function TypeCard({ title, children }: TypeCardProps) {
  return (
    <div className={styles.typeCard}>
      <h3>{title}</h3>
      <pre>
        <code>{children}</code>
      </pre>
    </div>
  )
}
