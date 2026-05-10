'use client'

import { useAppSettings } from '@/contexts/AppSettingsContext'
import { Sidebar } from '@/components/business/Sidebar'
import { Header } from '@/components/business/Header'
import { Layout } from 'antd'
import { useLocale } from '@/contexts/LocaleContext'
import { useEffect } from 'react'

const { Content } = Layout

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const { settings, updateSettings } = useAppSettings()
  const { appTheme } = useLocale()

  const handleCollapse = (collapsed: boolean) => {
    updateSettings({ collapsed })
  }

  const isDark = appTheme === 'dark'

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light')
  }, [isDark])

  const sidebarMargin = settings.collapsed ? 80 : 260
  const contentMargin = settings.sidebarPlacement === 'left' ? sidebarMargin : 0
  const rightMargin = settings.sidebarPlacement === 'right' ? sidebarMargin : 0

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar collapsed={settings.collapsed} onCollapse={handleCollapse} placement={settings.sidebarPlacement} />

      <Layout style={{ marginLeft: contentMargin, marginRight: rightMargin, transition: 'margin 0.2s' }}>
        <Header />

        <Content style={{ padding: 12, flex: 1, overflow: 'auto', minHeight: 'calc(100vh - 64px)' }}>
          {children}
        </Content>
      </Layout>
    </Layout>
  )
}
