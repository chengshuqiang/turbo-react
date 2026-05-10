'use client'

import { Select } from 'antd'
import { useLocale } from '@/contexts/LocaleContext'

const localeOptions = [
  { label: '中文', value: 'zhCN' },
  { label: 'English', value: 'enUS' }
]

export function LocaleSwitcher() {
  const { locale, setLocale } = useLocale()

  return (
    <div className='flex items-center gap-2'>
      <span className='text-sm text-gray-600 dark:text-gray-400'>语言:</span>
      <Select value={locale} onChange={setLocale} className='w-28' options={localeOptions} />
    </div>
  )
}
