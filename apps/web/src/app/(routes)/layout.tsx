'use client'

import { useLocale } from '@/contexts/LocaleContext'
import { Sidebar } from '@/components/business/Sidebar'
import { Header } from '@/components/business/Header'
import styles from '@/styles/pages/page.module.css'

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const { settings, toggleCollapse } = useLocale()

  return (
    <div className={styles.layout}>
      <Sidebar collapsed={settings.collapsed} onCollapse={toggleCollapse} />

      <div className={`${styles.headerContainer} ${settings.collapsed ? styles.headerContainerCollapsed : ''}`}>
        <Header />
        <main className={styles.main}>{children}</main>
      </div>
    </div>
  )
}
