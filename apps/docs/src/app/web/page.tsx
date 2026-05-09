import Link from 'next/link'
import styles from '@/styles/pages/web.module.css'

export default function WebDocsHome() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Web 项目文档</h1>
        <p className={styles.subtitle}>React 工程化项目开发文档</p>
      </div>

      <div className={styles.grid}>
        <Link href="/web/architecture" className={styles.card}>
          <div className={styles.cardIcon}>🏗️</div>
          <h2>架构设计</h2>
          <p>项目结构、技术选型、模块划分</p>
        </Link>

        <Link href="/web/components" className={styles.card}>
          <div className={styles.cardIcon}>🧩</div>
          <h2>组件文档</h2>
          <p>业务组件、UI 组件使用指南</p>
        </Link>

        <Link href="/web/api" className={styles.card}>
          <div className={styles.cardIcon}>🔌</div>
          <h2>API 文档</h2>
          <p>接口定义、调用方式、数据结构</p>
        </Link>

        <Link href="/web/guides" className={styles.card}>
          <div className={styles.cardIcon}>📖</div>
          <h2>开发指南</h2>
          <p>开发规范、最佳实践、常见问题</p>
        </Link>
      </div>

      <div className={styles.section}>
        <h2>快速开始</h2>
        <div className={styles.codeBlock}>
          <code>pnpm --filter web dev</code>
        </div>
      </div>
    </div>
  )
}
