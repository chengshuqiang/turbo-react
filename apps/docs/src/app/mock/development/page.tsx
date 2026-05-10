import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { DocSection } from '@/components/ui/DocSection'
import { InfoCard } from '@/components/ui/InfoCard'
import { CodeBlock } from '@/components/ui/CodeBlock'
import { PageLayout } from '@/components/ui/PageLayout'

const breadcrumbItems = [{ label: 'Mock Server', href: '/mock' }, { label: '开发指南' }]

export default function MockDevelopment() {
  return (
    <PageLayout title='开发指南' breadcrumb={<Breadcrumb items={breadcrumbItems} />}>
      <DocSection title='项目结构'>
        <CodeBlock>{`apps/mock/
├── src/
│   ├── config.ts          # 配置文件
│   ├── index.ts           # 入口文件
│   ├── routes/
│   │   ├── index.ts       # 路由导出
│   │   ├── user.ts        # 用户路由
│   │   └── post.ts        # 文章路由
│   └── types/
│       ├── index.ts       # 类型导出
│       ├── user.ts        # 用户类型
│       └── post.ts        # 文章类型
├── data/
│   └── db.json            # Mock 数据
├── package.json
└── tsconfig.json`}</CodeBlock>
      </DocSection>

      <DocSection title='添加新路由'>
        <InfoCard title='步骤 1: 定义类型' variant='info'>
          <p>
            在 <code>src/types/</code> 下创建新类型文件
          </p>
          <CodeBlock>{`// src/types/article.ts
export interface Article {
  id: number
  title: string
  content: string
  authorId: number
  tags: string[]
}`}</CodeBlock>
        </InfoCard>

        <InfoCard title='步骤 2: 创建路由文件' variant='info'>
          <CodeBlock>{`// src/routes/article.ts
import type { Request, Response } from 'express'
import type { Router } from 'express'

export function createArticleRouter(Router: () => Router) {
  const router = Router()

  router.get('/', (_req: Request, res: Response) => {
    res.json([{ id: 1, title: '示例' }])
  })

  return router
}`}</CodeBlock>
        </InfoCard>

        <InfoCard title='步骤 3: 注册路由' variant='info'>
          <p>
            在 <code>src/index.ts</code> 中注册新路由
          </p>
          <CodeBlock>{`import { createArticleRouter } from './routes/article.ts'

app.use('/api/articles', createArticleRouter(Router))`}</CodeBlock>
        </InfoCard>
      </DocSection>

      <DocSection title='路由开发规范'>
        <ul>
          <li>
            使用 <code>:param</code> 定义路径参数
          </li>
          <li>
            使用 <code>express.json()</code> 中间件解析请求体
          </li>
          <li>返回适当的 HTTP 状态码（200, 201, 400, 404, 500）</li>
          <li>统一响应格式</li>
        </ul>
      </DocSection>

      <DocSection title='数据持久化'>
        <InfoCard title='当前方案' variant='warning'>
          <p>
            使用 <code>data/db.json</code> 文件存储数据，每次修改直接读写文件。
          </p>
          <p>适用于开发测试，不适合生产环境。</p>
        </InfoCard>

        <InfoCard title='生产建议' variant='default'>
          <ul>
            <li>使用数据库（如 SQLite, PostgreSQL）</li>
            <li>实现数据缓存</li>
            <li>添加数据验证</li>
          </ul>
        </InfoCard>
      </DocSection>
    </PageLayout>
  )
}
