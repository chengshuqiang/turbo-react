import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { DocSection } from '@/components/ui/DocSection'
import { InfoCard } from '@/components/ui/InfoCard'
import { PageLayout } from '@/components/ui/PageLayout'
import styles from '@/styles/components/common.module.css'

const breadcrumbItems = [{ label: 'Mock Server', href: '/mock' }, { label: '快速开始' }]

export default function MockQuickStart() {
  return (
    <PageLayout title='快速开始' breadcrumb={<Breadcrumb items={breadcrumbItems} />}>
      <DocSection title='环境要求'>
        <ul>
          <li>Node.js {'>='} 18.0.0</li>
          <li>pnpm {'>='} 9.0.0</li>
        </ul>
      </DocSection>

      <DocSection title='安装依赖'>
        <div className={styles.codeBlock}>
          <code>pnpm install</code>
        </div>
      </DocSection>

      <DocSection title='启动服务'>
        <InfoCard title='开发模式' variant='info'>
          <div className={styles.codeBlock}>
            <code>pnpm --filter mock-server dev</code>
          </div>
          <p>启动后服务运行在 http://localhost:3100</p>
        </InfoCard>

        <InfoCard title='生产构建' variant='default'>
          <div className={styles.codeBlock}>
            <code>pnpm --filter mock-server build</code>
          </div>
        </InfoCard>
      </DocSection>

      <DocSection title='数据配置'>
        <p>
          Mock 数据存储在 <code>data/db.json</code> 文件中，包含 users 和 posts 两个集合。
        </p>
        <div className={styles.codeBlock}>
          <code>apps/mock/data/db.json</code>
        </div>
      </DocSection>

      <DocSection title='可用脚本'>
        <ul>
          <li>
            <code>dev</code> - 启动开发服务器（热重载）
          </li>
          <li>
            <code>build</code> - 构建生产版本
          </li>
          <li>
            <code>start</code> - 运行生产服务器
          </li>
          <li>
            <code>lint</code> - 代码检查
          </li>
        </ul>
      </DocSection>
    </PageLayout>
  )
}
