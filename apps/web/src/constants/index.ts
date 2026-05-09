/**
 * 应用常量定义
 */

/**
 * 语言选项
 */
export const LOCALE_OPTIONS = [
  { label: '中文', value: 'zh-CN' },
  { label: 'English', value: 'en-US' }
] as const

/**
 * 默认分页大小
 */
export const DEFAULT_PAGE_SIZE = 10

/**
 * 分页大小选项
 */
export const PAGE_SIZE_OPTIONS = [10, 20, 50, 100] as const

/**
 * 本地存储键名
 */
export const STORAGE_KEYS = {
  LOCALE: 'app_locale',
  THEME: 'app_theme',
  TOKEN: 'app_token'
} as const
