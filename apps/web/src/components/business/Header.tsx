'use client'

import { Select, Avatar, Space, Dropdown, Button } from 'antd'
import type { MenuProps } from 'antd'
import { useLocale } from '@/contexts/LocaleContext'
import { useAppSettings } from '@/contexts/AppSettingsContext'
import { UserOutlined, SettingOutlined, LogoutOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'

const localeOptions = [
  { value: 'zhCN', label: '中文' },
  { value: 'enUS', label: 'English' }
]

export function Header() {
  const { locale, setLocale } = useLocale()
  const { settings, setCollapsed } = useAppSettings()

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

  return (
    <div
      style={{
        height: 64,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 24px',
        background: '#fff',
        borderBottom: '1px solid #f0f0f0',
        position: 'sticky',
        top: 0,
        zIndex: 99
      }}
    >
      <Button
        type='text'
        icon={settings.collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => setCollapsed(!settings.collapsed)}
        style={{ fontSize: 16 }}
      />

      <Space size='middle'>
        <Select
          value={locale}
          onChange={setLocale}
          options={localeOptions}
          style={{ width: 100 }}
          variant='borderless'
        />
        <Dropdown menu={{ items: userMenuItems }} placement='bottomRight'>
          <Avatar style={{ backgroundColor: '#1677ff', cursor: 'pointer' }} icon={<UserOutlined />} />
        </Dropdown>
      </Space>
    </div>
  )
}
