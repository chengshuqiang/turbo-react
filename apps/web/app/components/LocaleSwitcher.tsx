'use client'

import { Select } from 'antd'
import { useLocale } from '../contexts/LocaleContext'

const localeOptions = [
  { label: '中文', value: 'zhCN' },
  { label: 'English', value: 'enUS' }
]

export function LocaleSwitcher() {
  const { locale, setLocale } = useLocale()

  return <Select value={locale} onChange={setLocale} style={{ width: 120 }} options={localeOptions} />
}
