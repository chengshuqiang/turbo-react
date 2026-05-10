import { NavCard } from '@/components/ui/NavCard'
import { PageLayout } from '@/components/ui/PageLayout'
import styles from '@/styles/components/common.module.css'

export default function WebDocsHome() {
  return (
    <PageLayout title='Web 项目文档'>
      <div className={styles.header}>
        <p className={styles.subtitle}>React 工程化项目开发文档</p>
      </div>

      <div className={styles.navGrid}>
        <NavCard href='/web/architecture' icon='🏗️' title='架构设计' description='项目结构、技术选型、模块划分' />

        <NavCard href='/web/components' icon='🧩' title='组件文档' description='业务组件、UI 组件使用指南' />

        <NavCard href='/web/api' icon='🔌' title='API 文档' description='接口定义、调用方式、数据结构' />

        <NavCard href='/web/guides' icon='📖' title='开发指南' description='开发规范、最佳实践、常见问题' />
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>快速开始</h2>
        <div className={styles.codeBlock}>
          <code>pnpm --filter web dev</code>
        </div>
      </div>
    </PageLayout>
  )
}
