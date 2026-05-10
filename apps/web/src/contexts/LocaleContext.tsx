'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { ConfigProvider, theme, Spin } from 'antd'
import zhCNAntd from 'antd/locale/zh_CN'
import enUSAntd from 'antd/locale/en_US'
import type { Locale } from 'antd/es/locale'
import zhCN from '@/i18n/locales/zh-CN'
import enUS from '@/i18n/locales/en-US'

export type ThemeType = 'light' | 'dark'
export type LocaleType = 'zhCN' | 'enUS'

interface AppSettings {
  theme: ThemeType
  locale: LocaleType
  collapsed: boolean
}

interface LocaleContextType {
  settings: AppSettings
  updateSettings: (newSettings: Partial<AppSettings>) => void
  toggleCollapse: () => void
  locale: LocaleType
  setLocale: (locale: LocaleType) => void
  antdLocale: Locale
  appTheme: ThemeType
  setAppTheme: (theme: ThemeType) => void
  t: (key: string) => string
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined)

const messagesMap = {
  zhCN,
  enUS
}

const localeMap: Record<LocaleType, Locale> = {
  zhCN: zhCNAntd,
  enUS: enUSAntd
}

const themeMap = {
  light: theme.defaultAlgorithm,
  dark: theme.darkAlgorithm
}

const defaultSettings: AppSettings = {
  theme: 'light',
  locale: 'zhCN',
  collapsed: false
}

function getInitialSettings(): AppSettings {
  if (typeof window === 'undefined') {
    return defaultSettings
  }
  try {
    const saved = localStorage.getItem('app-settings')
    if (saved) {
      const parsed = JSON.parse(saved)
      return {
        theme: parsed.theme === 'light' || parsed.theme === 'dark' ? parsed.theme : defaultSettings.theme,
        locale: parsed.locale === 'zhCN' || parsed.locale === 'enUS' ? parsed.locale : defaultSettings.locale,
        collapsed: typeof parsed.collapsed === 'boolean' ? parsed.collapsed : defaultSettings.collapsed
      }
    }
  } catch {
    console.error('Failed to parse app settings from localStorage')
  }
  return defaultSettings
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<AppSettings>(getInitialSettings)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  const updateSettings = (newSettings: Partial<AppSettings>) => {
    const updated = { ...settings, ...newSettings }
    setSettings(updated)
    localStorage.setItem('app-settings', JSON.stringify(updated))
  }

  const toggleCollapse = () => {
    updateSettings({ collapsed: !settings.collapsed })
  }

  const { theme: appTheme, locale } = settings

  const setLocale = (newLocale: LocaleType) => {
    updateSettings({ locale: newLocale })
  }

  const setAppTheme = (newTheme: ThemeType) => {
    updateSettings({ theme: newTheme })
  }

  const t = (key: string): string => {
    const keys = key.split('.')
    let value: unknown = messagesMap[locale]

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = (value as Record<string, unknown>)[k]
      } else {
        return key
      }
    }

    return typeof value === 'string' ? value : key
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', appTheme)
  }, [appTheme])

  if (!isReady) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          background: '#f5f5f5'
        }}
      >
        <Spin size='large' />
      </div>
    )
  }

  const value: LocaleContextType = {
    settings,
    updateSettings,
    toggleCollapse,
    locale,
    setLocale,
    antdLocale: localeMap[locale],
    appTheme,
    setAppTheme,
    t
  }

  return (
    <LocaleContext.Provider value={value}>
      <ConfigProvider locale={value.antdLocale} theme={{ algorithm: themeMap[appTheme] }}>
        {children}
      </ConfigProvider>
    </LocaleContext.Provider>
  )
}

export function useLocale() {
  const context = useContext(LocaleContext)
  if (!context) {
    throw new Error('useLocale must be used within LocaleProvider')
  }
  return context
}
