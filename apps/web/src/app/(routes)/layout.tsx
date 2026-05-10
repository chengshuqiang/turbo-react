'use client'

import { useLocale } from '@/contexts/LocaleContext'
import { Sidebar } from '@/components/business/Sidebar'
import { Header } from '@/components/business/Header'

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const { settings, toggleCollapse } = useLocale()

  const sidebarWidth = settings.collapsed ? 80 : 260

  return (
    <div style={{ minHeight: '100vh', background: 'var(--page-bg)' }}>
      <Sidebar collapsed={settings.collapsed} onCollapse={toggleCollapse} />
      <Header />
      <main
        style={{
          marginLeft: sidebarWidth,
          marginTop: 64,
          padding: 12,
          transition: 'margin 0.2s',
          minHeight: 'calc(100vh - 64px)'
        }}
      >
        {children}
      </main>
    </div>
  )
}
