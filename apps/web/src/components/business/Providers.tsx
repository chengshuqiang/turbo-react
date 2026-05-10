'use client'

import { LocaleProvider } from '@/contexts/LocaleContext'
import { AppProvider } from '@/contexts/AppSettingsContext'
import { AntdRegistry } from '@ant-design/nextjs-registry'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AppProvider>
      <LocaleProvider>
        <AntdRegistry>{children}</AntdRegistry>
      </LocaleProvider>
    </AppProvider>
  )
}
