import styles from '@/styles/components/faq.module.css'

interface FAQItem {
  question: string
  answer: string
}

interface FAQProps {
  items: FAQItem[]
}

export function FAQ({ items }: FAQProps) {
  return (
    <div className={styles.faq}>
      {items.map((item, index) => (
        <details key={index}>
          <summary className={styles.summary}>{item.question}</summary>
          <p className={styles.answer}>{item.answer}</p>
        </details>
      ))}
    </div>
  )
}
