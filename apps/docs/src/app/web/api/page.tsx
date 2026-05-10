import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { DocSection } from '@/components/ui/DocSection'
import { TypeCard } from '@/components/ui/TypeCard'
import { FileBlock } from '@/components/ui/FileBlock'
import { ExampleBlock } from '@/components/ui/ExampleBlock'
import { InfoCard } from '@/components/ui/InfoCard'
import { CodeBlock } from '@/components/ui/CodeBlock'
import { PageLayout } from '@/components/ui/PageLayout'

const breadcrumbItems = [{ label: 'Web 文档', href: '/web' }, { label: 'API 文档' }]

export default function ApiDocs() {
  return (
    <PageLayout title='API 文档' breadcrumb={<Breadcrumb items={breadcrumbItems} />}>
      <DocSection title='服务层 (Services)'>
        <p>所有 API 调用统一通过 services 层管理</p>

        <FileBlock filePath='src/services/api.ts'>{`// 基础配置
const BASE_URL = process.env.NEXT_PUBLIC_API_URL || '/api'

// 请求方法
export function get<T>(endpoint, params?)
export function post<T>(endpoint, data?)
export function put<T>(endpoint, data?)
export function del<T>(endpoint)`}</FileBlock>
      </DocSection>

      <DocSection title='类型定义'>
        <TypeCard title='ApiResponse'>{`interface ApiResponse<T = unknown> {
  code: number
  message: string
  data: T
}`}</TypeCard>

        <TypeCard title='PaginationParams'>{`interface PaginationParams {
  page: number
  pageSize: number
}`}</TypeCard>

        <TypeCard title='PaginationResponse'>{`interface PaginationResponse<T> {
  list: T[]
  total: number
  page: number
  pageSize: number
}`}</TypeCard>
      </DocSection>

      <DocSection title='使用示例'>
        <ExampleBlock title='GET 请求'>{`import { get } from '@/services/api'

interface User {
  id: number
  name: string
}

const response = await get<User[]>('/users')
const users = response.data`}</ExampleBlock>

        <ExampleBlock title='POST 请求'>{`import { post } from '@/services/api'

const newUser = { name: 'John', email: 'john@example.com' }
const response = await post<User>('/users', newUser)`}</ExampleBlock>
      </DocSection>

      <DocSection title='Context API'>
        <InfoCard title='LocaleContext' variant='info'>
          <p>国际化上下文，提供语言切换功能</p>
          <CodeBlock>{`import { useLocale } from '@/contexts/LocaleContext'

const { locale, setLocale, antdLocale } = useLocale()`}</CodeBlock>
        </InfoCard>
      </DocSection>
    </PageLayout>
  )
}
