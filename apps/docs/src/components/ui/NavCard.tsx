import Link from 'next/link'
import styles from '@/styles/components/nav-card.module.css'

interface NavCardProps {
  href: string
  icon: string
  title: string
  description: string
}

export function NavCard({ href, icon, title, description }: NavCardProps) {
  return (
    <Link href={href} className={styles.card}>
      <div className={styles.cardIcon}>{icon}</div>
      <h2>{title}</h2>
      <p>{description}</p>
    </Link>
  )
}
