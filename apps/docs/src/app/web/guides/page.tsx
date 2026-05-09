import Link from 'next/link'
import styles from '@/styles/pages/web-guides.module.css'

export default function GuidesDocs() {
  return (
    <div className={styles.container}>
      <div className={styles.breadcrumb}>
        <Link href="/web">Web 文档</Link>
        <span className={styles.separator}>/</span>
        <span>开发指南</span>
      </div>

      <h1 className={styles.title}>开发指南</h1>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>开发环境</h2>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>安装依赖</h3>
            <pre><code>pnpm install</code></pre>
          </div>
          <div className={styles.card}>
            <h3>启动开发服务器</h3>
            <pre><code>pnpm --filter web dev</code></pre>
          </div>
          <div className={styles.card}>
            <h3>类型检查</h3>
            <pre><code>pnpm --filter web check-types</code></pre>
          </div>
          <div className={styles.card}>
            <h3>代码检查</h3>
            <pre><code>pnpm --filter web lint</code></pre>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>代码规范</h2>
        <div className={styles.rules}>
          <div className={styles.rule}>
            <h3>TypeScript</h3>
            <ul>
              <li>使用严格模式</li>
              <li>避免使用 any 类型</li>
              <li>组件 Props 必须定义类型</li>
              <li>导出类型定义供外部使用</li>
            </ul>
          </div>
          <div className={styles.rule}>
            <h3>命名规范</h3>
            <ul>
              <li>组件：PascalCase (UserCard)</li>
              <li>函数：camelCase (getUserData)</li>
              <li>常量：UPPER_SNAKE_CASE (API_BASE_URL)</li>
              <li>类型/接口：PascalCase (UserData)</li>
            </ul>
          </div>
          <div className={styles.rule}>
            <h3>导入顺序</h3>
            <ol>
              <li>React 相关</li>
              <li>第三方库</li>
              <li>项目内部模块 (使用 @/ 别名)</li>
              <li>类型导入</li>
              <li>样式文件</li>
            </ol>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>样式管理</h2>
        <div className={styles.info}>
          <h3>CSS 模块组织</h3>
          <ul>
            <li><code>src/styles/pages/</code> - 页面样式</li>
            <li><code>src/styles/components/</code> - 组件样式</li>
          </ul>
          <p>样式文件与组件分离，统一管理在 styles 目录下</p>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>国际化 (i18n)</h2>
        <div className={styles.info}>
          <h3>添加新语言</h3>
          <ol>
            <li>在 <code>src/i18n/locales/</code> 创建新语言文件</li>
            <li>在 <code>src/i18n/config.ts</code> 中注册</li>
            <li>更新 LocaleContext 的类型定义</li>
          </ol>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>常见问题</h2>
        <div className={styles.faq}>
          <details>
            <summary>如何添加新页面？</summary>
            <p>在 <code>src/app/</code> 下创建新目录和 page.tsx 文件</p>
          </details>
          <details>
            <summary>如何使用 Ant Design 组件？</summary>
            <p>直接从 antd 导入，已在 Providers 中配置</p>
          </details>
          <details>
            <summary>如何添加 API 接口？</summary>
            <p>在 <code>src/services/api.ts</code> 添加新的请求方法</p>
          </details>
        </div>
      </section>
    </div>
  )
}
