'use client'

import { Avatar, Space, Dropdown, Button } from 'antd'
import type { MenuProps } from 'antd'
import { useLocale } from '@/contexts/LocaleContext'
import {
  UserOutlined,
  SettingOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  GlobalOutlined,
  SunOutlined,
  MoonOutlined
} from '@ant-design/icons'

export function Header() {
  const { locale, setLocale, appTheme, setAppTheme, t, settings, toggleCollapse } = useLocale()

  const sidebarWidth = settings.collapsed ? 80 : 260

  const localeItems: MenuProps['items'] = [
    { key: 'zhCN', label: t('locale.zhCN') },
    { key: 'enUS', label: t('locale.enUS') }
  ]

  const themeItems: MenuProps['items'] = [
    { key: 'light', label: t('theme.light') },
    { key: 'dark', label: t('theme.dark') }
  ]

  const userMenuItems: MenuProps['items'] = [
    {
      key: 'profile',
      icon: <UserOutlined />,
      label: t('nav.profile')
    },
    {
      key: 'settings',
      icon: <SettingOutlined />,
      label: t('nav.settings')
    },
    { type: 'divider' },
    {
      key: 'logout',
      icon: <LogoutOutlined />,
      label: t('common.logout'),
      danger: true
    }
  ]

  const isDark = appTheme === 'dark'

  return (
    <div
      style={{
        height: 64,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 24px',
        paddingLeft: sidebarWidth + 24,
        background: 'var(--header-bg)',
        borderBottom: '1px solid var(--header-border)',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 99,
        transition: 'padding-left 0.2s'
      }}
    >
      <Button
        type='text'
        icon={settings.collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={toggleCollapse}
        style={{ fontSize: 16, color: 'var(--header-icon)' }}
      />

      <Space size='middle'>
        <Dropdown
          menu={{
            items: themeItems,
            selectedKeys: [appTheme],
            onClick: ({ key }) => setAppTheme(key as 'light' | 'dark')
          }}
          trigger={['click']}
        >
          <Button
            type='text'
            icon={isDark ? <SunOutlined /> : <MoonOutlined />}
            style={{ fontSize: 16, color: 'var(--header-icon)' }}
          />
        </Dropdown>
        <Dropdown
          menu={{
            items: localeItems,
            selectedKeys: [locale],
            onClick: ({ key }) => setLocale(key as 'zhCN' | 'enUS')
          }}
          trigger={['click']}
        >
          <Button type='text' icon={<GlobalOutlined />} style={{ fontSize: 16, color: 'var(--header-icon)' }} />
        </Dropdown>
        <Dropdown menu={{ items: userMenuItems }} placement='bottomRight'>
          <Avatar style={{ backgroundColor: '#1677ff', cursor: 'pointer' }} icon={<UserOutlined />} />
        </Dropdown>
      </Space>
    </div>
  )
}
