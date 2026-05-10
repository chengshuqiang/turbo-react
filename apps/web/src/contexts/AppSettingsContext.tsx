'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface AppSettings {
  sidebarPlacement: 'left' | 'right'
  themeColor: string
  collapsed: boolean
}

interface AppContextType {
  settings: AppSettings
  updateSettings: (newSettings: Partial<AppSettings>) => void
  collapsed: boolean
  setCollapsed: (collapsed: boolean) => void
}

const defaultSettings: AppSettings = {
  sidebarPlacement: 'left',
  themeColor: '#1677ff',
  collapsed: false
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export function AppProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<AppSettings>(defaultSettings)
  const [collapsed, setCollapsed] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('app-settings')
    if (saved) {
      setSettings(JSON.parse(saved))
      setCollapsed(JSON.parse(saved).collapsed || false)
    }
  }, [])

  const updateSettings = (newSettings: Partial<AppSettings>) => {
    const updated = { ...settings, ...newSettings }
    setSettings(updated)
    localStorage.setItem('app-settings', JSON.stringify(updated))
  }

  return (
    <AppContext.Provider value={{ settings, updateSettings, collapsed, setCollapsed }}>{children}</AppContext.Provider>
  )
}

export function useAppSettings() {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useAppSettings must be used within AppProvider')
  }
  return context
}
