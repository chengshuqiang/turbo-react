'use client'

import { Typography, Card, Table, Button, Tag, Space, Input } from 'antd'
import type { TableColumnsType } from 'antd'
import { useState } from 'react'
import { PlusOutlined, SearchOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons'

const { Title, Text } = Typography

interface DataType {
  key: string
  name: string
  email: string
  phone: string
  role: string
  status: string
}

const initialData: DataType[] = [
  { key: '1', name: '张三', email: 'zhangsan@example.com', phone: '138****1234', role: '管理员', status: '活跃' },
  { key: '2', name: '李四', email: 'lisi@example.com', phone: '139****5678', role: '编辑', status: '活跃' },
  { key: '3', name: '王五', email: 'wangwu@example.com', phone: '137****9012', role: '访客', status: '停用' },
  { key: '4', name: '赵六', email: 'zhaoliu@example.com', phone: '136****3456', role: '编辑', status: '活跃' }
]

const columns: TableColumnsType<DataType> = [
  { title: '姓名', dataIndex: 'name', key: 'name' },
  { title: '邮箱', dataIndex: 'email', key: 'email' },
  { title: '电话', dataIndex: 'phone', key: 'phone' },
  { title: '角色', dataIndex: 'role', key: 'role' },
  {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
    render: (status: string) => <Tag color={status === '活跃' ? 'success' : 'default'}>{status}</Tag>
  },
  {
    title: '操作',
    key: 'action',
    render: () => (
      <Space>
        <Button type='link' size='small' icon={<EditOutlined />}>
          编辑
        </Button>
        <Button type='link' size='small' danger icon={<DeleteOutlined />}>
          删除
        </Button>
      </Space>
    )
  }
]

export default function UsersPage() {
  const [data] = useState<DataType[]>(initialData)
  const [searchText, setSearchText] = useState('')

  return (
    <div>
      <div style={{ marginBottom: 24 }}>
        <Title level={3} style={{ margin: 0 }}>
          用户管理
        </Title>
        <Text type='secondary'>管理系统用户</Text>
      </div>

      <Card>
        <div style={{ marginBottom: 16, display: 'flex', justifyContent: 'space-between' }}>
          <Input
            placeholder='搜索用户...'
            prefix={<SearchOutlined />}
            style={{ width: 250 }}
            value={searchText}
            onChange={e => setSearchText(e.target.value)}
          />
          <Button type='primary' icon={<PlusOutlined />}>
            添加用户
          </Button>
        </div>

        <Table<DataType>
          columns={columns}
          dataSource={data.filter(item => item.name.includes(searchText) || item.email.includes(searchText))}
          pagination={{ pageSize: 10 }}
        />
      </Card>
    </div>
  )
}
