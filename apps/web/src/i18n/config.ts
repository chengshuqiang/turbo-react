/**
 * i18n 配置
 */

import type { LocaleType } from '@/types'
import zhCN from './locales/zh-CN'
import enUS from './locales/en-US'

export const locales = {
  'zh-CN': zhCN,
  'en-US': enUS
} as const

export const defaultLocale: LocaleType = 'zh-CN'

export type LocaleMessages = typeof zhCN

/**
 * 获取语言包
 */
export function getMessages(locale: LocaleType) {
  return locales[locale] || locales[defaultLocale]
}
