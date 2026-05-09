/**
 * 全局类型定义
 */

/**
 * 语言类型
 */
export type LocaleType = 'zh-CN' | 'en-US'

/**
 * 通用响应结构
 */
export interface ApiResponse<T = unknown> {
  code: number
  message: string
  data: T
}

/**
 * 分页参数
 */
export interface PaginationParams {
  page: number
  pageSize: number
}

/**
 * 分页响应
 */
export interface PaginationResponse<T> {
  list: T[]
  total: number
  page: number
  pageSize: number
}
