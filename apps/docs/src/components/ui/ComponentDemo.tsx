import { ReactNode } from 'react'
import styles from '@/styles/components/component-demo.module.css'

interface ComponentDemoProps {
  name: string
  description: string
  children: ReactNode
}

export function ComponentDemo({ name, description, children }: ComponentDemoProps) {
  return (
    <div className={styles.component}>
      <h3>{name}</h3>
      <p className={styles.desc}>{description}</p>
      <div className={styles.usage}>
        <h4>使用方式</h4>
        {children}
      </div>
    </div>
  )
}
