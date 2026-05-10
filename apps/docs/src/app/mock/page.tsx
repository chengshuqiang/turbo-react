import { NavCard } from '@/components/ui/NavCard'
import { PageLayout } from '@/components/ui/PageLayout'
import styles from '@/styles/components/common.module.css'

export default function MockDocsHome() {
  return (
    <PageLayout title='Mock Server 文档'>
      <div className={styles.header}>
        <p className={styles.subtitle}>Express Mock API 服务器开发文档</p>
      </div>

      <div className={styles.navGrid}>
        <NavCard href='/mock/quickstart' icon='🚀' title='快速开始' description='环境搭建、启动服务、数据配置' />

        <NavCard href='/mock/api' icon='🔌' title='API 文档' description='用户接口、文章接口、数据结构' />

        <NavCard href='/mock/development' icon='💻' title='开发指南' description='路由开发、类型定义、扩展指南' />
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>快速启动</h2>
        <div className={styles.codeBlock}>
          <code>pnpm --filter mock-server dev</code>
        </div>
      </div>
    </PageLayout>
  )
}
