import styles from '@/styles/components/code-block.module.css'

interface CodeBlockProps {
  children: string
  language?: string
}

export function CodeBlock({ children }: CodeBlockProps) {
  return (
    <pre className={styles.codeBlock}>
      <code>{children}</code>
    </pre>
  )
}
