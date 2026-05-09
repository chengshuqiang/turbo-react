'use client'

import { LocaleProvider } from '../contexts/LocaleContext'
import { AntdRegistry } from '@ant-design/nextjs-registry'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LocaleProvider>
      <AntdRegistry>{children}</AntdRegistry>
    </LocaleProvider>
  )
}
