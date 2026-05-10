'use client'

import { Typography, Card, Row, Col, Button, Input, Select, Switch, Slider, Rate } from 'antd'
import { useState } from 'react'
import { useLocale } from '@/contexts/LocaleContext'
import styles from '@/styles/pages/page.module.css'

const { Title, Text } = Typography

export default function ComponentsPage() {
  const { t } = useLocale()
  const [inputValue, setInputValue] = useState('')
  const [selectValue, setSelectValue] = useState('option1')
  const [switchValue, setSwitchValue] = useState(true)
  const [sliderValue, setSliderValue] = useState(50)
  const [rateValue, setRateValue] = useState(3)

  return (
    <div>
      <div className={styles.pageHeader}>
        <Title level={3} style={{ margin: 0 }}>
          {t('components.title')}
        </Title>
        <Text type='secondary'>{t('components.description')}</Text>
      </div>

      <Row gutter={[16, 16]}>
        <Col xs={24} lg={12}>
          <Card title={t('components.buttons')} size='small'>
            <div className={styles.componentGrid}>
              <Button type='primary'>{t('components.primaryButton')}</Button>
              <Button>{t('components.defaultButton')}</Button>
              <Button type='dashed'>{t('components.dashedButton')}</Button>
              <Button type='text'>{t('components.textButton')}</Button>
              <Button danger>{t('components.dangerButton')}</Button>
              <Button type='link'>{t('components.linkButton')}</Button>
            </div>
          </Card>
        </Col>

        <Col xs={24} lg={12}>
          <Card title={t('components.input')} size='small'>
            <div className={styles.inputGroup}>
              <Input
                placeholder={t('components.inputPlaceholder')}
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
              />
            </div>
            <Input.Search
              placeholder={t('components.search')}
              enterButton={t('components.search')}
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
            />
          </Card>
        </Col>

        <Col xs={24} lg={12}>
          <Card title={t('components.select')} size='small'>
            <Select
              value={selectValue}
              onChange={setSelectValue}
              className={styles.inputFullWidth}
              options={[
                { value: 'option1', label: t('components.option1') },
                { value: 'option2', label: t('components.option2') },
                { value: 'option3', label: t('components.option3') }
              ]}
            />
          </Card>
        </Col>

        <Col xs={24} lg={12}>
          <Card title={t('components.switch')} size='small'>
            <div className={styles.componentRow}>
              <Switch checked={switchValue} onChange={setSwitchValue} />
              <Text>{switchValue ? t('components.on') : t('components.off')}</Text>
            </div>
          </Card>
        </Col>

        <Col xs={24} lg={12}>
          <Card title={t('components.slider')} size='small'>
            <Slider value={sliderValue} onChange={setSliderValue} />
            <Text type='secondary'>
              {t('components.currentValue')}: {sliderValue}
            </Text>
          </Card>
        </Col>

        <Col xs={24} lg={12}>
          <Card title={t('components.rating')} size='small'>
            <Rate value={rateValue} onChange={setRateValue} />
            <div className={styles.ratingValue}>
              <Text type='secondary'>
                {t('components.currentRating')}: {rateValue} {t('components.star')}
              </Text>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  )
}
