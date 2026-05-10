import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { FeatureCard } from '@/components/ui/FeatureCard'
import { ComponentDemo } from '@/components/ui/ComponentDemo'
import { PageLayout } from '@/components/ui/PageLayout'
import styles from '@/styles/components/common.module.css'

const breadcrumbItems = [{ label: 'Web 文档', href: '/web' }, { label: '组件文档' }]

export default function ComponentsDocs() {
  return (
    <PageLayout title='组件文档' breadcrumb={<Breadcrumb items={breadcrumbItems} />}>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>组件分类</h2>
        <div className={styles.cardGrid}>
          <FeatureCard icon='🧩' title='UI 组件' badge='src/components/ui'>
            <p>基础 UI 组件，无业务逻辑，可在任何项目中复用</p>
            <ul>
              <li>纯展示组件</li>
              <li>不含业务状态</li>
              <li>通过 props 接收数据</li>
            </ul>
          </FeatureCard>

          <FeatureCard icon='💼' title='业务组件' badge='src/components/business'>
            <p>包含业务逻辑的组件，与具体业务场景相关</p>
            <ul>
              <li>包含业务状态</li>
              <li>调用 API 服务</li>
              <li>使用 Context/Hooks</li>
            </ul>
          </FeatureCard>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>现有业务组件</h2>

        <ComponentDemo name='Providers' description='应用级别的 Provider 包装器，包含 Ant Design 配置和国际化 Provider'>
          <pre>
            <code>{`import { Providers } from '@/components/business/Providers'

export default function Layout({ children }) {
  return <Providers>{children}</Providers>
}`}</code>
          </pre>
        </ComponentDemo>

        <ComponentDemo name='LocaleSwitcher' description='语言切换组件，支持中文/英文切换'>
          <pre>
            <code>{`import { LocaleSwitcher } from '@/components/business/LocaleSwitcher'

<LocaleSwitcher />`}</code>
          </pre>
        </ComponentDemo>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>开发规范</h2>
        <ul className={styles.rules}>
          <li>组件使用 PascalCase 命名</li>
          <li>每个组件一个文件，文件名与组件名一致</li>
          <li>
            UI 组件放在 <code>components/ui</code> 目录
          </li>
          <li>
            业务组件放在 <code>components/business</code> 目录
          </li>
          <li>组件样式使用 CSS Modules 或 styled-components</li>
          <li>导出类型定义供外部使用</li>
        </ul>
      </section>
    </PageLayout>
  )
}
