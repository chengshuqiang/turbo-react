'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu } from 'antd'
import type { MenuProps } from 'antd'
import { Layout } from 'antd'
import {
  HomeOutlined,
  AppstoreOutlined,
  TableOutlined,
  FormOutlined,
  TeamOutlined,
  UserOutlined,
  SettingOutlined,
  GlobalOutlined,
  BellOutlined,
  SafetyOutlined
} from '@ant-design/icons'
import { useLocale } from '@/contexts/LocaleContext'

const { Sider } = Layout

type MenuItem = Required<MenuProps>['items'][number]

export function Sidebar({ collapsed, onCollapse }: SidebarProps) {
  const pathname = usePathname()
  const { appTheme, t } = useLocale()

  const isDark = appTheme === 'dark'

  const siderTheme = isDark ? 'dark' : 'light'
  const menuTheme = isDark ? 'dark' : 'light'

  const menuItems: MenuItem[] = [
    {
      key: '/',
      icon: <HomeOutlined />,
      label: <Link href='/'>{t('menu.home')}</Link>
    },
    {
      key: 'components',
      icon: <AppstoreOutlined />,
      label: t('menu.components'),
      children: [
        {
          key: '/components',
          label: <Link href='/components'>{t('menu.basicComponents')}</Link>,
          icon: <TableOutlined />
        },
        {
          key: '/components/form',
          label: <Link href='/components/form'>{t('menu.formComponents')}</Link>,
          icon: <FormOutlined />
        }
      ]
    },
    {
      key: 'system',
      icon: <SettingOutlined />,
      label: t('menu.systemManagement'),
      children: [
        {
          key: '/users',
          label: <Link href='/users'>{t('menu.userManagement')}</Link>,
          icon: <TeamOutlined />
        },
        {
          key: '/roles',
          label: <Link href='/users'>{t('menu.roleManagement')}</Link>,
          icon: <UserOutlined />
        },
        {
          key: '/permissions',
          label: <Link href='/users'>{t('menu.permissionManagement')}</Link>,
          icon: <SafetyOutlined />
        }
      ]
    },
    {
      key: 'settings',
      icon: <SettingOutlined />,
      label: t('menu.systemSettings'),
      children: [
        {
          key: '/settings',
          label: <Link href='/settings'>{t('menu.basic')}</Link>,
          icon: <GlobalOutlined />
        },
        {
          key: '/settings/notification',
          label: <Link href='/settings'>{t('menu.notification')}</Link>,
          icon: <BellOutlined />
        }
      ]
    }
  ]

  return (
    <Sider
      theme={siderTheme}
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}
      trigger={null}
      width={260}
      collapsedWidth={80}
      style={{
        background: 'var(--sidebar-bg)',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        zIndex: 100,
        borderRight: '1px solid var(--sidebar-border)',
        overflow: 'hidden'
      }}
    >
      <div
        style={{
          height: 64,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderBottom: '1px solid var(--sidebar-border)'
        }}
      >
        {collapsed ? (
          <span style={{ color: 'var(--sidebar-text)', fontSize: 20, fontWeight: 'bold' }}>W</span>
        ) : (
          <h1 style={{ color: 'var(--sidebar-text)', fontSize: 18, fontWeight: 600, margin: 0 }}>
            {t('sidebar.title')}
          </h1>
        )}
      </div>

      <Menu
        theme={menuTheme}
        mode='inline'
        selectedKeys={[pathname]}
        defaultOpenKeys={['components', 'system', 'settings']}
        items={menuItems}
        inlineCollapsed={collapsed}
        style={{ borderRight: 0 }}
      />

      {!collapsed && (
        <div
          style={{
            position: 'absolute',
            bottom: 16,
            left: 16,
            fontSize: 12,
            color: 'var(--sidebar-footer)'
          }}
        >
          <p>Tailwind v4</p>
          <p>Next.js 16</p>
        </div>
      )}
    </Sider>
  )
}

interface SidebarProps {
  collapsed: boolean
  onCollapse: (collapsed: boolean) => void
}
