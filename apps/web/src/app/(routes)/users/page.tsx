'use client'

import { Typography, Card, Table, Button, Tag, Space, Input } from 'antd'
import type { TableColumnsType } from 'antd'
import { useState } from 'react'
import { PlusOutlined, SearchOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons'
import { useLocale } from '@/contexts/LocaleContext'
import styles from '@/styles/pages/page.module.css'

const { Title, Text } = Typography

interface DataType {
  key: string
  name: string
  email: string
  phone: string
  role: string
  status: string
}

export default function UsersPage() {
  const { t } = useLocale()
  const [data] = useState<DataType[]>([
    {
      key: '1',
      name: 'Zhang San',
      email: 'zhangsan@example.com',
      phone: '138****1234',
      role: t('users.admin'),
      status: t('users.active')
    },
    {
      key: '2',
      name: 'Li Si',
      email: 'lisi@example.com',
      phone: '139****5678',
      role: t('users.editor'),
      status: t('users.active')
    },
    {
      key: '3',
      name: 'Wang Wu',
      email: 'wangwu@example.com',
      phone: '137****9012',
      role: t('users.visitor'),
      status: t('users.disabled')
    },
    {
      key: '4',
      name: 'Zhao Liu',
      email: 'zhaoliu@example.com',
      phone: '136****3456',
      role: t('users.editor'),
      status: t('users.active')
    }
  ])
  const [searchText, setSearchText] = useState('')

  const columns: TableColumnsType<DataType> = [
    { title: t('users.name'), dataIndex: 'name', key: 'name' },
    { title: t('users.email'), dataIndex: 'email', key: 'email' },
    { title: t('users.phone'), dataIndex: 'phone', key: 'phone' },
    { title: t('users.role'), dataIndex: 'role', key: 'role' },
    {
      title: t('users.status'),
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => <Tag color={status === t('users.active') ? 'success' : 'default'}>{status}</Tag>
    },
    {
      title: t('users.action'),
      key: 'action',
      render: () => (
        <Space>
          <Button type='link' size='small' icon={<EditOutlined />}>
            {t('users.edit')}
          </Button>
          <Button type='link' size='small' danger icon={<DeleteOutlined />}>
            {t('users.delete')}
          </Button>
        </Space>
      )
    }
  ]

  return (
    <div>
      <div className={styles.pageHeader}>
        <Title level={3} style={{ margin: 0 }}>
          {t('users.title')}
        </Title>
        <Text type='secondary'>{t('users.description')}</Text>
      </div>

      <Card>
        <div className={styles.tableToolbar}>
          <Input
            placeholder={t('users.searchPlaceholder')}
            prefix={<SearchOutlined />}
            className={styles.searchInput}
            value={searchText}
            onChange={e => setSearchText(e.target.value)}
          />
          <Button type='primary' icon={<PlusOutlined />}>
            {t('users.addUser')}
          </Button>
        </div>

        <Table<DataType>
          columns={columns}
          dataSource={data.filter(
            item => item.name.toLowerCase().includes(searchText.toLowerCase()) || item.email.includes(searchText)
          )}
          pagination={{ pageSize: 10 }}
        />
      </Card>
    </div>
  )
}
