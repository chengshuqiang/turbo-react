'use client'

import { Typography, Card, Form, Input, Switch, Button, Space, message } from 'antd'
import { useState, useEffect } from 'react'
import { useLocale } from '@/contexts/LocaleContext'
import styles from '@/styles/pages/page.module.css'

const { Title, Text } = Typography

export default function SettingsPage() {
  const [form] = Form.useForm()
  const { t, settings, setAppTheme, setLocale, locale } = useLocale()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    form.setFieldsValue({
      username: 'Admin',
      email: 'admin@example.com',
      notifications: true
    })
  }, [form])

  const handleSave = async () => {
    try {
      await form.validateFields()
      setLoading(true)
      setTimeout(() => {
        message.success(t('settings.saved'))
        setLoading(false)
      }, 500)
    } catch {
      message.error(t('settings.validationFailed'))
    }
  }

  return (
    <div>
      <div className={styles.pageHeader}>
        <Title level={3} style={{ margin: 0 }}>
          {t('settings.title')}
        </Title>
        <Text type='secondary'>{t('settings.description')}</Text>
      </div>

      <Form form={form} layout='vertical'>
        <Card title={t('settings.basicInfo')} style={{ marginBottom: 12 }}>
          <Form.Item label={t('settings.username')} name='username' rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label={t('settings.email')} name='email' rules={[{ required: true, type: 'email' }]}>
            <Input />
          </Form.Item>
        </Card>

        <Card title={t('settings.appearance')} style={{ marginBottom: 12 }}>
          <Form.Item label={t('settings.theme')}>
            <Space>
              <Button type={settings.theme === 'light' ? 'primary' : 'default'} onClick={() => setAppTheme('light')}>
                {t('settings.light')}
              </Button>
              <Button type={settings.theme === 'dark' ? 'primary' : 'default'} onClick={() => setAppTheme('dark')}>
                {t('settings.dark')}
              </Button>
            </Space>
          </Form.Item>
          <Form.Item label={t('settings.language')}>
            <Space>
              <Button type={locale === 'zhCN' ? 'primary' : 'default'} onClick={() => setLocale('zhCN')}>
                中文
              </Button>
              <Button type={locale === 'enUS' ? 'primary' : 'default'} onClick={() => setLocale('enUS')}>
                English
              </Button>
            </Space>
          </Form.Item>
        </Card>

        <Card title={t('settings.notification')} style={{ marginBottom: 12 }}>
          <Form.Item label={t('settings.enableNotifications')} name='notifications' valuePropName='checked'>
            <Switch />
          </Form.Item>
        </Card>

        <Card>
          <Space>
            <Button type='primary' onClick={handleSave} loading={loading}>
              {t('settings.save')}
            </Button>
            <Button onClick={() => form.resetFields()}>{t('settings.reset')}</Button>
          </Space>
        </Card>
      </Form>
    </div>
  )
}
