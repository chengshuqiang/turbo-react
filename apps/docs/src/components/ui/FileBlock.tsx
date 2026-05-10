import { CodeBlock } from './CodeBlock'
import styles from '@/styles/components/file-block.module.css'

interface FileBlockProps {
  filePath: string
  children: string
}

export function FileBlock({ filePath, children }: FileBlockProps) {
  return (
    <div className={styles.file}>
      <div className={styles.fileHeader}>
        <code>{filePath}</code>
      </div>
      <CodeBlock>{children}</CodeBlock>
    </div>
  )
}
