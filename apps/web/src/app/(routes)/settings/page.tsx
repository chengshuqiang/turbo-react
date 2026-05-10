'use client'

import { Typography, Card, Form, Input, Switch, Select, Button, Space, ColorPicker, message } from 'antd'
import { useState, useEffect } from 'react'
import { useAppSettings } from '@/contexts/AppSettingsContext'
import { AppstoreOutlined } from '@ant-design/icons'

const { Title, Text } = Typography

export default function SettingsPage() {
  const [form] = Form.useForm()
  const { settings, updateSettings } = useAppSettings()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    form.setFieldsValue({
      systemName: 'Web 应用',
      description: '一个现代化的管理系统',
      language: 'zhCN',
      emailNotification: true,
      smsNotification: false,
      pushNotification: true,
      darkMode: false,
      compactMode: false,
      twoFactor: false,
      captcha: true,
      sidebarPlacement: settings.sidebarPlacement,
      themeColor: settings.themeColor
    })
  }, [settings, form])

  const handleSave = () => {
    setLoading(true)
    const values = form.getFieldsValue()

    setTimeout(() => {
      updateSettings({
        sidebarPlacement: values.sidebarPlacement,
        themeColor: values.themeColor
      })
      setLoading(false)
      message.success('设置保存成功')
    }, 500)
  }

  return (
    <div>
      <div style={{ marginBottom: 24 }}>
        <Title level={3} style={{ margin: 0 }}>
          系统设置
        </Title>
        <Text type='secondary'>配置系统参数</Text>
      </div>

      <Form form={form} layout='vertical' onFinish={handleSave}>
        <Card title='布局设置' style={{ marginBottom: 16 }} extra={<AppstoreOutlined />}>
          <Form.Item label='菜单位置' name='sidebarPlacement'>
            <Select
              options={[
                { value: 'left', label: '左侧' },
                { value: 'right', label: '右侧' }
              ]}
            />
          </Form.Item>
          <Form.Item label='主题颜色' name='themeColor'>
            <ColorPicker showText />
          </Form.Item>
        </Card>

        <Card title='基本信息' style={{ marginBottom: 16 }}>
          <Form.Item label='系统名称' name='systemName'>
            <Input placeholder='请输入系统名称' />
          </Form.Item>
          <Form.Item label='系统描述' name='description'>
            <Input.TextArea rows={3} placeholder='请输入系统描述' />
          </Form.Item>
          <Form.Item label='系统语言' name='language'>
            <Select
              options={[
                { value: 'zhCN', label: '简体中文' },
                { value: 'enUS', label: 'English' }
              ]}
            />
          </Form.Item>
        </Card>

        <Card title='通知设置' style={{ marginBottom: 16 }}>
          <Form.Item label='邮件通知' name='emailNotification' valuePropName='checked'>
            <Switch />
          </Form.Item>
          <Form.Item label='短信通知' name='smsNotification' valuePropName='checked'>
            <Switch />
          </Form.Item>
          <Form.Item label='推送通知' name='pushNotification' valuePropName='checked'>
            <Switch />
          </Form.Item>
        </Card>

        <Card title='外观设置'>
          <Form.Item label='深色模式' name='darkMode' valuePropName='checked'>
            <Switch />
          </Form.Item>
          <Form.Item label='紧凑模式' name='compactMode' valuePropName='checked'>
            <Switch />
          </Form.Item>
        </Card>

        <div style={{ marginTop: 24 }}>
          <Space>
            <Button type='primary' htmlType='submit' loading={loading}>
              保存设置
            </Button>
            <Button onClick={() => form.resetFields()}>重置</Button>
          </Space>
        </div>
      </Form>
    </div>
  )
}
