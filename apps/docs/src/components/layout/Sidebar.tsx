'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from '@/styles/components/sidebar.module.css'

interface NavItem {
  title: string
  href: string
  children?: NavItem[]
}

const navItems: NavItem[] = [
  {
    title: 'Web 文档',
    href: '/web',
    children: [
      { title: '概述', href: '/web' },
      { title: '架构设计', href: '/web/architecture' },
      { title: '组件文档', href: '/web/components' },
      { title: 'API 文档', href: '/web/api' },
      { title: '开发指南', href: '/web/guides' }
    ]
  }
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarHeader}>
        <Link href='/' className={styles.logo}>
          📚 项目文档
        </Link>
      </div>
      <nav className={styles.nav}>
        {navItems.map(item => (
          <div key={item.href} className={styles.navGroup}>
            <Link href={item.href} className={styles.navGroupTitle}>
              {item.title}
            </Link>
            {item.children && (
              <ul className={styles.navList}>
                {item.children.map(child => (
                  <li key={child.href}>
                    <Link
                      href={child.href}
                      className={`${styles.navLink} ${pathname === child.href ? styles.active : ''}`}
                    >
                      {child.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </nav>
    </aside>
  )
}
