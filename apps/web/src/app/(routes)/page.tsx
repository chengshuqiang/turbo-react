'use client'

import { Button, Card, Row, Col, Statistic, Table, Tag, Typography } from 'antd'
import type { TableColumnsType } from 'antd'
import { UserOutlined, RiseOutlined, DollarOutlined, TeamOutlined } from '@ant-design/icons'
import { useLocale } from '@/contexts/LocaleContext'
import styles from '@/styles/pages/page.module.css'

const { Title, Text } = Typography

interface DataType {
  key: string
  name: string
  email: string
  role: string
  status: string
}

export default function Home() {
  const { t } = useLocale()

  const columns: TableColumnsType<DataType> = [
    { title: t('users.name'), dataIndex: 'name', key: 'name' },
    { title: t('users.email'), dataIndex: 'email', key: 'email' },
    { title: t('users.role'), dataIndex: 'role', key: 'role' },
    {
      title: t('users.status'),
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => <Tag color={status === t('users.active') ? 'success' : 'default'}>{status}</Tag>
    }
  ]

  const data: DataType[] = [
    { key: '1', name: 'Zhang San', email: 'zhangsan@example.com', role: t('users.admin'), status: t('users.active') },
    { key: '2', name: 'Li Si', email: 'lisi@example.com', role: t('users.editor'), status: t('users.active') },
    { key: '3', name: 'Wang Wu', email: 'wangwu@example.com', role: t('users.visitor'), status: t('users.disabled') }
  ]

  return (
    <div>
      <div className={styles.pageHeader}>
        <Title level={3} style={{ margin: 0 }}>
          {t('home.title')}
        </Title>
        <Text type='secondary'>{t('home.welcome')}</Text>
      </div>

      <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic title={t('home.totalUsers')} value={1234} prefix={<UserOutlined />} />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title={t('home.activeUsers')}
              value={856}
              prefix={<TeamOutlined />}
              styles={{ content: { color: '#3f8600' } }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic title={t('home.newUsers')} value={42} prefix={<RiseOutlined />} suffix={t('home.perDay')} />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic title={t('home.totalRevenue')} value={12580} prefix={<DollarOutlined />} suffix='¥' />
          </Card>
        </Col>
      </Row>

      <Card
        title={t('home.userList')}
        style={{ marginBottom: 24 }}
        extra={<Button type='primary'>{t('home.addUser')}</Button>}
      >
        <Table<DataType> columns={columns} dataSource={data} pagination={false} />
      </Card>

      <Card title={t('home.quickActions')}>
        <Row gutter={[12, 12]}>
          <Col>
            <Button type='primary'>{t('home.newProject')}</Button>
          </Col>
        </Row>
      </Card>
    </div>
  )
}
