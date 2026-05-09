import Link from 'next/link'
import styles from '@/styles/pages/web-architecture.module.css'

export default function ArchitectureDocs() {
  return (
    <div className={styles.container}>
      <div className={styles.breadcrumb}>
        <Link href="/web">Web 文档</Link>
        <span className={styles.separator}>/</span>
        <span>架构设计</span>
      </div>

      <h1 className={styles.title}>架构设计</h1>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>项目结构</h2>
        <pre className={styles.codeBlock}><code>{`apps/web/
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
└── public/                     # 静态资源`}</code></pre>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>技术栈</h2>
        <div className={styles.techGrid}>
          <div className={styles.techCard}>
            <h3>框架</h3>
            <ul>
              <li>Next.js 16 (App Router)</li>
              <li>React 19</li>
              <li>TypeScript 5.9</li>
            </ul>
          </div>
          <div className={styles.techCard}>
            <h3>UI 库</h3>
            <ul>
              <li>Ant Design 6</li>
              <li>@ant-design/nextjs-registry</li>
            </ul>
          </div>
          <div className={styles.techCard}>
            <h3>工具</h3>
            <ul>
              <li>Turborepo</li>
              <li>pnpm</li>
              <li>ESLint</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>核心原则</h2>
        <ul className={styles.list}>
          <li><strong>按功能分类</strong>：组件分为 ui（无业务逻辑）和 business（有业务逻辑）</li>
          <li><strong>样式分离</strong>：CSS 模块按 pages 和 components 分类管理</li>
          <li><strong>类型安全</strong>：使用 TypeScript 严格模式</li>
          <li><strong>国际化</strong>：使用 React Context + Ant Design Locale</li>
        </ul>
      </section>
    </div>
  )
}
