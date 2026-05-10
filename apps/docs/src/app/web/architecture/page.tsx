import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { DocSection } from '@/components/ui/DocSection'
import { TechCard } from '@/components/ui/TechCard'
import { PageLayout } from '@/components/ui/PageLayout'
import styles from '@/styles/components/common.module.css'

const breadcrumbItems = [{ label: 'Web 文档', href: '/web' }, { label: '架构设计' }]

export default function ArchitectureDocs() {
  return (
    <PageLayout title='架构设计' breadcrumb={<Breadcrumb items={breadcrumbItems} />}>
      <DocSection title='项目结构'>
        <pre className={styles.codeBlock}>
          <code>{`apps/web/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          # 根布局
│   │   ├── globals.css         # 全局样式
│   │   ├── fonts/              # 字体文件
│   │   └── web/                # 页面路由
│   ├── components/             # 组件
│   │   ├── ui/                 # 基础 UI 组件
│   │   └── business/           # 业务组件
│   ├── contexts/               # React Context
│   ├── hooks/                  # 自定义 Hooks
│   ├── lib/                    # 第三方库封装
│   ├── services/               # API 服务
│   ├── utils/                  # 工具函数
│   ├── types/                  # TypeScript 类型
│   ├── constants/              # 常量定义
│   ├── i18n/                   # 国际化资源
│   └── styles/                 # 样式文件
├── tests/                      # 测试文件
└── public/                     # 静态资源`}</code>
        </pre>
      </DocSection>

      <DocSection title='技术栈'>
        <div className={styles.techGrid}>
          <TechCard title='框架'>
            <ul>
              <li>Next.js 16 (App Router)</li>
              <li>React 19</li>
              <li>TypeScript 5.9</li>
            </ul>
          </TechCard>
          <TechCard title='UI 库'>
            <ul>
              <li>Ant Design 6</li>
              <li>@ant-design/nextjs-registry</li>
            </ul>
          </TechCard>
          <TechCard title='工具'>
            <ul>
              <li>Turborepo</li>
              <li>pnpm</li>
              <li>ESLint</li>
            </ul>
          </TechCard>
        </div>
      </DocSection>

      <DocSection title='核心原则'>
        <ul className={styles.list}>
          <li>
            <strong>按功能分类</strong>：组件分为 ui（无业务逻辑）和 business（有业务逻辑）
          </li>
          <li>
            <strong>样式分离</strong>：CSS 模块按 pages 和 components 分类管理
          </li>
          <li>
            <strong>类型安全</strong>：使用 TypeScript 严格模式
          </li>
          <li>
            <strong>国际化</strong>：使用 React Context + Ant Design Locale
          </li>
        </ul>
      </DocSection>
    </PageLayout>
  )
}
