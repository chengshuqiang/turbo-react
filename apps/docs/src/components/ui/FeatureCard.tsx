import { ReactNode } from 'react'
import styles from '@/styles/components/feature-card.module.css'

interface FeatureCardProps {
  icon?: string
  title: string
  badge?: string
  children: ReactNode
}

export function FeatureCard({ icon, title, badge, children }: FeatureCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        {icon && <div className={styles.cardIcon}>{icon}</div>}
        <h3>{title}</h3>
        {badge && <code className={styles.badge}>{badge}</code>}
      </div>
      {children}
    </div>
  )
}
