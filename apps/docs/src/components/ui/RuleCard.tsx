import styles from '@/styles/components/rule-card.module.css'

interface RuleCardProps {
  title: string
  children: React.ReactNode
}

export function RuleCard({ title, children }: RuleCardProps) {
  return (
    <div className={styles.rule}>
      <h3>{title}</h3>
      {children}
    </div>
  )
}
