'use client'

import { Button, Card, Row, Col, Statistic, Table, Tag, Typography } from 'antd'
import type { TableColumnsType } from 'antd'
import { UserOutlined, RiseOutlined, DollarOutlined, TeamOutlined } from '@ant-design/icons'

const { Title, Text } = Typography

interface DataType {
  key: string
  name: string
  email: string
  role: string
  status: string
}

const columns: TableColumnsType<DataType> = [
  { title: '姓名', dataIndex: 'name', key: 'name' },
  { title: '邮箱', dataIndex: 'email', key: 'email' },
  { title: '角色', dataIndex: 'role', key: 'role' },
  {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
    render: (status: string) => <Tag color={status === '活跃' ? 'success' : 'default'}>{status}</Tag>
  }
]

const data: DataType[] = [
  { key: '1', name: '张三', email: 'zhangsan@example.com', role: '管理员', status: '活跃' },
  { key: '2', name: '李四', email: 'lisi@example.com', role: '编辑', status: '活跃' },
  { key: '3', name: '王五', email: 'wangwu@example.com', role: '访客', status: '停用' }
]

export default function Home() {
  return (
    <div>
      <div style={{ marginBottom: 24 }}>
        <Title level={3} style={{ margin: 0 }}>
          仪表盘
        </Title>
        <Text type='secondary'>欢迎回来</Text>
      </div>

      <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic title='总用户数' value={1234} prefix={<UserOutlined />} />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title='活跃用户'
              value={856}
              prefix={<TeamOutlined />}
              styles={{ content: { color: '#3f8600' } }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic title='新增用户' value={42} prefix={<RiseOutlined />} suffix='/天' />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic title='总收入' value={12580} prefix={<DollarOutlined />} suffix='¥' />
          </Card>
        </Col>
      </Row>

      <Card title='用户列表' style={{ marginBottom: 24 }} extra={<Button type='primary'>添加用户</Button>}>
        <Table<DataType> columns={columns} dataSource={data} pagination={false} />
      </Card>

      <Card title='快捷操作'>
        <Row gutter={[12, 12]}>
          <Col>
            <Button type='primary'>新建项目</Button>
          </Col>
          <Col>
            <Button>发送通知</Button>
          </Col>
          <Col>
            <Button>导出数据</Button>
          </Col>
        </Row>
      </Card>
    </div>
  )
}
