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
import styles from '@/styles/components/header.module.css'

export function Header() {
  const { locale, setLocale, appTheme, setAppTheme, t, settings, toggleCollapse } = useLocale()

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
    <header className={styles.header}>
      <div className={styles.leftSection}>
        <Button
          type='text'
          icon={settings.collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={toggleCollapse}
          className={styles.menuBtn}
        />
      </div>

      <Space size='middle'>
        <Dropdown
          menu={{
            items: themeItems,
            selectedKeys: [appTheme],
            onClick: ({ key }) => setAppTheme(key as 'light' | 'dark')
          }}
          trigger={['click']}
        >
          <Button type='text' icon={isDark ? <SunOutlined /> : <MoonOutlined />} className={styles.iconBtn} />
        </Dropdown>
        <Dropdown
          menu={{ items: localeItems, selectedKeys: [locale], onClick: ({ key }) => setLocale(key as 'zhCN' | 'enUS') }}
          trigger={['click']}
        >
          <Button type='text' icon={<GlobalOutlined />} className={styles.iconBtn} />
        </Dropdown>
        <Dropdown menu={{ items: userMenuItems }} placement='bottomRight'>
          <Avatar className={styles.avatar} icon={<UserOutlined />} />
        </Dropdown>
      </Space>
    </header>
  )
}
