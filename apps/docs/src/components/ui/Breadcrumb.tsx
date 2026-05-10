'use client'

import Link from 'next/link'
import styles from '@/styles/components/breadcrumb.module.css'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <div className={styles.breadcrumb}>
      {items.map((item, index) => (
        <span key={index}>
          {item.href ? (
            <Link href={item.href} className={styles.link}>
              {item.label}
            </Link>
          ) : (
            <span className={styles.current}>{item.label}</span>
          )}
          {index < items.length - 1 && <span className={styles.separator}>/</span>}
        </span>
      ))}
    </div>
  )
}
