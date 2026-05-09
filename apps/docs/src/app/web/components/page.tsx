import Link from 'next/link'
import styles from '@/styles/pages/web-components.module.css'

export default function ComponentsDocs() {
  return (
    <div className={styles.container}>
      <div className={styles.breadcrumb}>
        <Link href="/web">Web 文档</Link>
        <span className={styles.separator}>/</span>
        <span>组件文档</span>
      </div>

      <h1 className={styles.title}>组件文档</h1>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>组件分类</h2>
        <div className={styles.cardGrid}>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <h3>UI 组件</h3>
              <code className={styles.badge}>src/components/ui</code>
            </div>
            <p>基础 UI 组件，无业务逻辑，可在任何项目中复用</p>
            <ul>
              <li>纯展示组件</li>
              <li>不含业务状态</li>
              <li>通过 props 接收数据</li>
            </ul>
          </div>

          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <h3>业务组件</h3>
              <code className={styles.badge}>src/components/business</code>
            </div>
            <p>包含业务逻辑的组件，与具体业务场景相关</p>
            <ul>
              <li>包含业务状态</li>
              <li>调用 API 服务</li>
              <li>使用 Context/Hooks</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>现有业务组件</h2>

        <div className={styles.component}>
          <h3>Providers</h3>
          <p className={styles.desc}>应用级别的 Provider 包装器，包含 Ant Design 配置和国际化 Provider</p>
          <div className={styles.usage}>
            <h4>使用方式</h4>
            <pre><code>{`import { Providers } from '@/components/business/Providers'

export default function Layout({ children }) {
  return <Providers>{children}</Providers>
}`}</code></pre>
          </div>
        </div>

        <div className={styles.component}>
          <h3>LocaleSwitcher</h3>
          <p className={styles.desc}>语言切换组件，支持中文/英文切换</p>
          <div className={styles.usage}>
            <h4>使用方式</h4>
            <pre><code>{`import { LocaleSwitcher } from '@/components/business/LocaleSwitcher'

<LocaleSwitcher />`}</code></pre>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>开发规范</h2>
        <ul className={styles.rules}>
          <li>组件使用 PascalCase 命名</li>
          <li>每个组件一个文件，文件名与组件名一致</li>
          <li>UI 组件放在 <code>components/ui</code> 目录</li>
          <li>业务组件放在 <code>components/business</code> 目录</li>
          <li>组件样式使用 CSS Modules 或 styled-components</li>
          <li>导出类型定义供外部使用</li>
        </ul>
      </section>
    </div>
  )
}
