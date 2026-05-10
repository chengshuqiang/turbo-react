import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { DocSection } from '@/components/ui/DocSection'
import { InfoCard } from '@/components/ui/InfoCard'
import { FAQ } from '@/components/ui/FAQ'
import { GridCard } from '@/components/ui/GridCard'
import { RuleCard } from '@/components/ui/RuleCard'
import { PageLayout } from '@/components/ui/PageLayout'
import styles from '@/styles/components/common.module.css'

const breadcrumbItems = [{ label: 'Web 文档', href: '/web' }, { label: '开发指南' }]

const faqItems = [
  {
    question: '如何添加新页面？',
    answer: '在 src/app/ 下创建新目录和 page.tsx 文件'
  },
  {
    question: '如何使用 Ant Design 组件？',
    answer: '直接从 antd 导入，已在 Providers 中配置'
  },
  {
    question: '如何添加 API 接口？',
    answer: '在 src/services/api.ts 添加新的请求方法'
  }
]

export default function GuidesDocs() {
  return (
    <PageLayout title='开发指南' breadcrumb={<Breadcrumb items={breadcrumbItems} />}>
      <DocSection title='开发环境'>
        <div className={styles.grid}>
          <GridCard title='安装依赖'>pnpm install</GridCard>
          <GridCard title='启动开发服务器'>pnpm --filter web dev</GridCard>
          <GridCard title='类型检查'>pnpm --filter web check-types</GridCard>
          <GridCard title='代码检查'>pnpm --filter web lint</GridCard>
        </div>
      </DocSection>

      <DocSection title='代码规范'>
        <div className={styles.rules}>
          <RuleCard title='TypeScript'>
            <ul>
              <li>使用严格模式</li>
              <li>避免使用 any 类型</li>
              <li>组件 Props 必须定义类型</li>
              <li>导出类型定义供外部使用</li>
            </ul>
          </RuleCard>
          <RuleCard title='命名规范'>
            <ul>
              <li>组件：PascalCase (UserCard)</li>
              <li>函数：camelCase (getUserData)</li>
              <li>常量：UPPER_SNAKE_CASE (API_BASE_URL)</li>
              <li>类型/接口：PascalCase (UserData)</li>
            </ul>
          </RuleCard>
          <RuleCard title='导入顺序'>
            <ol>
              <li>React 相关</li>
              <li>第三方库</li>
              <li>项目内部模块 (使用 @/ 别名)</li>
              <li>类型导入</li>
              <li>样式文件</li>
            </ol>
          </RuleCard>
        </div>
      </DocSection>

      <DocSection title='样式管理'>
        <InfoCard title='CSS 模块组织' variant='info'>
          <ul>
            <li>
              <code>src/styles/pages/</code> - 页面样式
            </li>
            <li>
              <code>src/styles/components/</code> - 组件样式
            </li>
          </ul>
          <p>样式文件与组件分离，统一管理在 styles 目录下</p>
        </InfoCard>
      </DocSection>

      <DocSection title='国际化 (i18n)'>
        <InfoCard title='添加新语言' variant='default'>
          <ol>
            <li>
              在 <code>src/i18n/locales/</code> 创建新语言文件
            </li>
            <li>
              在 <code>src/i18n/config.ts</code> 中注册
            </li>
            <li>更新 LocaleContext 的类型定义</li>
          </ol>
        </InfoCard>
      </DocSection>

      <DocSection title='常见问题'>
        <FAQ items={faqItems} />
      </DocSection>
    </PageLayout>
  )
}
