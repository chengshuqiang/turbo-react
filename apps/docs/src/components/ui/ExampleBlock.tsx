import { CodeBlock } from './CodeBlock'
import styles from '@/styles/components/example-block.module.css'

interface ExampleBlockProps {
  title: string
  children: string
}

export function ExampleBlock({ title, children }: ExampleBlockProps) {
  return (
    <div className={styles.example}>
      <h3>{title}</h3>
      <CodeBlock>{children}</CodeBlock>
    </div>
  )
}
