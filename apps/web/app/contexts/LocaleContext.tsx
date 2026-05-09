'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import { ConfigProvider, theme } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import enUS from 'antd/locale/en_US'
import type { Locale } from 'antd/es/locale'

type LocaleType = 'zhCN' | 'enUS'

interface LocaleContextType {
  locale: LocaleType
  setLocale: (locale: LocaleType) => void
  antdLocale: Locale
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined)

const localeMap: Record<LocaleType, Locale> = {
  zhCN,
  enUS
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<LocaleType>('zhCN')

  const value = {
    locale,
    setLocale,
    antdLocale: localeMap[locale]
  }

  return (
    <LocaleContext.Provider value={value}>
      <ConfigProvider locale={value.antdLocale} theme={{ algorithm: theme.defaultAlgorithm }}>
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
