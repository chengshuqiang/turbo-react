import { ReactNode } from 'react'
import styles from '@/styles/components/page-layout.module.css'

interface PageLayoutProps {
  title: string
  breadcrumb?: ReactNode
  children: ReactNode
}

export function PageLayout({ title, breadcrumb, children }: PageLayoutProps) {
  return (
    <div className={styles.container}>
      {breadcrumb && <div className={styles.breadcrumb}>{breadcrumb}</div>}
      <h1 className={styles.title}>{title}</h1>
      {children}
    </div>
  )
}
