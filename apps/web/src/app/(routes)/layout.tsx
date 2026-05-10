'use client'

import { useAppSettings } from '@/contexts/AppSettingsContext'
import { Sidebar } from '@/components/business/Sidebar'
import { Header } from '@/components/business/Header'
import { Layout } from 'antd'

const { Content } = Layout

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const { settings } = useAppSettings()

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar collapsed={settings.collapsed} onCollapse={() => {}} placement={settings.sidebarPlacement} />

      <Layout
        style={{
          marginLeft: settings.sidebarPlacement === 'left' ? (settings.collapsed ? 60 : 260) : 0,
          marginRight: settings.sidebarPlacement === 'right' ? (settings.collapsed ? 60 : 260) : 0,
          transition: 'margin 0.2s',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Header />

        <Content style={{ padding: '24px', background: '#f5f5f5', flex: 1 }}>{children}</Content>
      </Layout>
    </Layout>
  )
}
