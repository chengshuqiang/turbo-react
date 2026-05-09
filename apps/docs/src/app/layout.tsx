import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Sidebar } from '@/components/layout/Sidebar'
import './globals.css'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans'
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono'
})

export const metadata: Metadata = {
  title: 'Project Documentation',
  description: 'React 工程化项目文档'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="layout">
          <Sidebar />
          <main className="main-content">{children}</main>
        </div>
        <style>{`
          .layout {
            display: flex;
            min-height: 100vh;
          }
          .main-content {
            flex: 1;
            margin-left: 260px;
            min-height: 100vh;
          }
        `}</style>
      </body>
    </html>
  )
}
