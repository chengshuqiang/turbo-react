import styles from '@/styles/components/info-card.module.css'

type InfoCardVariant = 'default' | 'info' | 'warning' | 'success'

interface InfoCardProps {
  title: string
  children: React.ReactNode
  variant?: InfoCardVariant
}

export function InfoCard({ title, children, variant = 'default' }: InfoCardProps) {
  return (
    <div className={`${styles.card} ${styles[variant]}`}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.content}>{children}</div>
    </div>
  )
}
