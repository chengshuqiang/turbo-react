import Link from 'next/link'
import styles from '@/styles/pages/web-api.module.css'

export default function ApiDocs() {
  return (
    <div className={styles.container}>
      <div className={styles.breadcrumb}>
        <Link href="/web">Web 文档</Link>
        <span className={styles.separator}>/</span>
        <span>API 文档</span>
      </div>

      <h1 className={styles.title}>API 文档</h1>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>服务层 (Services)</h2>
        <p className={styles.desc}>所有 API 调用统一通过 services 层管理</p>

        <div className={styles.file}>
          <div className={styles.fileHeader}>
            <code>src/services/api.ts</code>
          </div>
          <pre><code>{`// 基础配置
const BASE_URL = process.env.NEXT_PUBLIC_API_URL || '/api'

// 请求方法
export function get<T>(endpoint, params?)
export function post<T>(endpoint, data?)
export function put<T>(endpoint, data?)
export function del<T>(endpoint)`}</code></pre>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>类型定义</h2>

        <div className={styles.typeCard}>
          <h3>ApiResponse</h3>
          <pre><code>{`interface ApiResponse<T = unknown> {
  code: number
  message: string
  data: T
}`}</code></pre>
        </div>

        <div className={styles.typeCard}>
          <h3>PaginationParams</h3>
          <pre><code>{`interface PaginationParams {
  page: number
  pageSize: number
}`}</code></pre>
        </div>

        <div className={styles.typeCard}>
          <h3>PaginationResponse</h3>
          <pre><code>{`interface PaginationResponse<T> {
  list: T[]
  total: number
  page: number
  pageSize: number
}`}</code></pre>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>使用示例</h2>

        <div className={styles.example}>
          <h3>GET 请求</h3>
          <pre><code>{`import { get } from '@/services/api'

interface User {
  id: number
  name: string
}

const response = await get<User[]>('/users')
const users = response.data`}</code></pre>
        </div>

        <div className={styles.example}>
          <h3>POST 请求</h3>
          <pre><code>{`import { post } from '@/services/api'

const newUser = { name: 'John', email: 'john@example.com' }
const response = await post<User>('/users', newUser)`}</code></pre>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Context API</h2>

        <div className={styles.contextCard}>
          <h3>LocaleContext</h3>
          <p>国际化上下文，提供语言切换功能</p>
          <pre><code>{`import { useLocale } from '@/contexts/LocaleContext'

const { locale, setLocale, antdLocale } = useLocale()`}</code></pre>
        </div>
      </section>
    </div>
  )
}
