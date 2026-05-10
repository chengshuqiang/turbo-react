import styles from '@/styles/components/tech-card.module.css'

interface TechCardProps {
  title: string
  children: React.ReactNode
}

export function TechCard({ title, children }: TechCardProps) {
  return (
    <div className={styles.techCard}>
      <h3>{title}</h3>
      {children}
    </div>
  )
}
