'use client'

import { Avatar, Space, Dropdown, Button } from 'antd'
import type { MenuProps } from 'antd'
import { useLocale } from '@/contexts/LocaleContext'
import { useAppSettings } from '@/contexts/AppSettingsContext'
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

const localeOptions = [
  { value: 'zhCN', label: '中文' },
  { value: 'enUS', label: 'English' }
]

const localeItems: MenuProps['items'] = localeOptions.map(option => ({
  key: option.value,
  label: option.label
}))

const themeOptions = [
  { value: 'light', label: '浅色' },
  { value: 'dark', label: '深色' }
]

const themeItems: MenuProps['items'] = themeOptions.map(option => ({
  key: option.value,
  label: option.label
}))

export function Header() {
  const { locale, setLocale, appTheme, setAppTheme } = useLocale()
  const { settings, updateSettings } = useAppSettings()

  const userMenuItems: MenuProps['items'] = [
    {
      key: 'profile',
      icon: <UserOutlined />,
      label: '个人中心'
    },
    {
      key: 'settings',
      icon: <SettingOutlined />,
      label: '设置'
    },
    { type: 'divider' },
    {
      key: 'logout',
      icon: <LogoutOutlined />,
      label: '退出登录',
      danger: true
    }
  ]

  const handleToggleCollapse = () => {
    updateSettings({ collapsed: !settings.collapsed })
  }

  const isDark = appTheme === 'dark'

  return (
    <div
      style={{
        height: 64,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 24px',
        background: 'var(--header-bg)',
        borderBottom: '1px solid var(--header-border)',
        flexShrink: 0
      }}
    >
      <Button
        type='text'
        icon={settings.collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={handleToggleCollapse}
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
