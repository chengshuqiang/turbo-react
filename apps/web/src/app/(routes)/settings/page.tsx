'use client'

import { Typography, Card, Form, Input, Switch, Button, Space, message } from 'antd'
import { useState, useEffect } from 'react'
import { useLocale } from '@/contexts/LocaleContext'

const { Title, Text } = Typography

export default function SettingsPage() {
  const [form] = Form.useForm()
  const { settings, updateSettings, t } = useLocale()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    form.setFieldsValue({
      systemName: t('sidebar.title'),
      description: '',
      language: settings.locale,
      emailNotification: true,
      smsNotification: false,
      pushNotification: true,
      darkMode: settings.theme === 'dark',
      compactMode: false,
      twoFactor: false,
      captcha: true
    })
  }, [settings, form, t])

  const handleSave = () => {
    setLoading(true)
    const values = form.getFieldsValue()

    setTimeout(() => {
      updateSettings({
        locale: values.language,
        theme: values.darkMode ? 'dark' : 'light'
      })
      setLoading(false)
      message.success(t('common.success'))
    }, 500)
  }

  return (
    <div>
      <div style={{ marginBottom: 24 }}>
        <Title level={3} style={{ margin: 0 }}>
          {t('nav.settings')}
        </Title>
        <Text type='secondary'>{t('nav.settingsDescription')}</Text>
      </div>

      <Form form={form} layout='vertical' onFinish={handleSave}>
        <Card title={t('settings.basicInfo')} style={{ marginBottom: 16 }}>
          <Form.Item label={t('settings.systemName')} name='systemName'>
            <Input placeholder={t('settings.systemNamePlaceholder')} />
          </Form.Item>
          <Form.Item label={t('settings.description')} name='description'>
            <Input.TextArea rows={3} placeholder={t('settings.descriptionPlaceholder')} />
          </Form.Item>
        </Card>

        <Card title={t('settings.appearance')} style={{ marginBottom: 16 }}>
          <Form.Item label={t('settings.darkMode')} name='darkMode' valuePropName='checked'>
            <Switch />
          </Form.Item>
        </Card>

        <Card title={t('settings.notification')} style={{ marginBottom: 16 }}>
          <Form.Item label={t('settings.emailNotification')} name='emailNotification' valuePropName='checked'>
            <Switch />
          </Form.Item>
          <Form.Item label={t('settings.smsNotification')} name='smsNotification' valuePropName='checked'>
            <Switch />
          </Form.Item>
          <Form.Item label={t('settings.pushNotification')} name='pushNotification' valuePropName='checked'>
            <Switch />
          </Form.Item>
        </Card>

        <Card title={t('settings.security')}>
          <Form.Item label={t('settings.twoFactor')} name='twoFactor' valuePropName='checked'>
            <Switch />
          </Form.Item>
          <Form.Item label={t('settings.captcha')} name='captcha' valuePropName='checked'>
            <Switch />
          </Form.Item>
        </Card>

        <div style={{ marginTop: 24 }}>
          <Space>
            <Button type='primary' htmlType='submit' loading={loading}>
              {t('common.submit')}
            </Button>
            <Button onClick={() => form.resetFields()}>{t('common.reset')}</Button>
          </Space>
        </div>
      </Form>
    </div>
  )
}
