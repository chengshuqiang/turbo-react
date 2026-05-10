'use client'

import { useLocale } from '@/contexts/LocaleContext'
import { Sidebar } from '@/components/business/Sidebar'
import { Header } from '@/components/business/Header'
import { Layout } from 'antd'

const { Content } = Layout

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const { settings, toggleCollapse } = useLocale()

  const sidebarMargin = settings.collapsed ? 80 : 260

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar collapsed={settings.collapsed} onCollapse={toggleCollapse} />

      <Layout
        style={{
          marginLeft: sidebarMargin,
          transition: 'margin 0.2s'
        }}
      >
        <Header />

        <Content
          style={{
            padding: 12,
            flex: 1,
            overflow: 'auto',
            minHeight: 'calc(100vh - 64px)'
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  )
}
