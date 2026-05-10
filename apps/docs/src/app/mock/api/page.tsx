import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { DocSection } from '@/components/ui/DocSection'
import { InfoCard } from '@/components/ui/InfoCard'
import { CodeBlock } from '@/components/ui/CodeBlock'
import { PageLayout } from '@/components/ui/PageLayout'
import styles from '@/styles/components/common.module.css'

const breadcrumbItems = [{ label: 'Mock Server', href: '/mock' }, { label: 'API 文档' }]

const userApiExamples = [
  { method: 'GET', path: '/api/users', desc: '获取所有用户' },
  { method: 'GET', path: '/api/users/:id', desc: '获取单个用户' },
  { method: 'POST', path: '/api/users', desc: '创建用户' },
  { method: 'PUT', path: '/api/users/:id', desc: '更新用户' },
  { method: 'DELETE', path: '/api/users/:id', desc: '删除用户' }
]

const postApiExamples = [
  { method: 'GET', path: '/api/posts', desc: '获取所有文章' },
  { method: 'GET', path: '/api/posts/:id', desc: '获取单篇文章' },
  { method: 'POST', path: '/api/posts', desc: '创建文章' },
  { method: 'PUT', path: '/api/posts/:id', desc: '更新文章' },
  { method: 'DELETE', path: '/api/posts/:id', desc: '删除文章' }
]

export default function MockApiDocs() {
  return (
    <PageLayout title='API 文档' breadcrumb={<Breadcrumb items={breadcrumbItems} />}>
      <DocSection title='基础信息'>
        <InfoCard title='服务地址' variant='info'>
          <p>
            Base URL: <code>http://localhost:3100</code>
          </p>
        </InfoCard>
      </DocSection>

      <DocSection title='用户接口 /api/users'>
        <div className={styles.table}>
          <table>
            <thead>
              <tr>
                <th>方法</th>
                <th>路径</th>
                <th>描述</th>
              </tr>
            </thead>
            <tbody>
              {userApiExamples.map((api, idx) => (
                <tr key={`user-${api.method}-${idx}`}>
                  <td>
                    <code>{api.method}</code>
                  </td>
                  <td>
                    <code>{api.path}</code>
                  </td>
                  <td>{api.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <InfoCard title='GET /api/users/:id 响应示例' variant='default'>
          <CodeBlock>{`{
  "id": 1,
  "name": "张三",
  "email": "zhangsan@example.com",
  "role": "管理员"
}`}</CodeBlock>
        </InfoCard>

        <InfoCard title='POST /api/users 请求体示例' variant='default'>
          <CodeBlock>{`{
  "name": "新用户",
  "email": "new@example.com",
  "role": "访客"
}`}</CodeBlock>
        </InfoCard>
      </DocSection>

      <DocSection title='文章接口 /api/posts'>
        <div className={styles.table}>
          <table>
            <thead>
              <tr>
                <th>方法</th>
                <th>路径</th>
                <th>描述</th>
              </tr>
            </thead>
            <tbody>
              {postApiExamples.map((api, idx) => (
                <tr key={`post-${api.method}-${idx}`}>
                  <td>
                    <code>{api.method}</code>
                  </td>
                  <td>
                    <code>{api.path}</code>
                  </td>
                  <td>{api.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <InfoCard title='GET /api/posts/:id 响应示例' variant='default'>
          <CodeBlock>{`{
  "id": 1,
  "title": "文章标题",
  "content": "文章内容...",
  "authorId": 1
}`}</CodeBlock>
        </InfoCard>
      </DocSection>

      <DocSection title='数据类型'>
        <InfoCard title='User 类型' variant='info'>
          <CodeBlock>{`interface User {
  id: number
  name: string
  email: string
  role: string
}`}</CodeBlock>
        </InfoCard>

        <InfoCard title='Post 类型' variant='info'>
          <CodeBlock>{`interface Post {
  id: number
  title: string
  content: string
  authorId: number
}`}</CodeBlock>
        </InfoCard>
      </DocSection>
    </PageLayout>
  )
}
