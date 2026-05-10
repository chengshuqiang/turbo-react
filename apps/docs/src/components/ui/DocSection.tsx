import styles from '@/styles/components/doc-section.module.css'

interface DocSectionProps {
  title: string
  children: React.ReactNode
}

export function DocSection({ title, children }: DocSectionProps) {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </section>
  )
}
