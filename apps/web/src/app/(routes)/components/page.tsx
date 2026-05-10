'use client'

import { Typography, Card, Row, Col, Button, Input, Select, Switch, Slider, Rate } from 'antd'
import { useState } from 'react'

const { Title, Text } = Typography

export default function ComponentsPage() {
  const [inputValue, setInputValue] = useState('')
  const [selectValue, setSelectValue] = useState('option1')
  const [switchValue, setSwitchValue] = useState(true)
  const [sliderValue, setSliderValue] = useState(50)
  const [rateValue, setRateValue] = useState(3)

  return (
    <div>
      <div style={{ marginBottom: 24 }}>
        <Title level={3} style={{ margin: 0 }}>
          组件示例
        </Title>
        <Text type='secondary'>Ant Design 组件展示</Text>
      </div>

      <Row gutter={[16, 16]}>
        <Col xs={24} lg={12}>
          <Card title='按钮' size='small'>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              <Button type='primary'>主要按钮</Button>
              <Button>默认按钮</Button>
              <Button type='dashed'>虚线按钮</Button>
              <Button type='text'>文本按钮</Button>
              <Button danger>危险按钮</Button>
              <Button type='link'>链接按钮</Button>
            </div>
          </Card>
        </Col>

        <Col xs={24} lg={12}>
          <Card title='输入框' size='small'>
            <Input
              placeholder='请输入内容'
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
              style={{ marginBottom: 12 }}
            />
            <Input.Search
              placeholder='搜索'
              enterButton='搜索'
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
            />
          </Card>
        </Col>

        <Col xs={24} lg={12}>
          <Card title='选择器' size='small'>
            <Select
              value={selectValue}
              onChange={setSelectValue}
              style={{ width: '100%' }}
              options={[
                { value: 'option1', label: '选项一' },
                { value: 'option2', label: '选项二' },
                { value: 'option3', label: '选项三' }
              ]}
            />
          </Card>
        </Col>

        <Col xs={24} lg={12}>
          <Card title='开关' size='small'>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <Switch checked={switchValue} onChange={setSwitchValue} />
              <Text>{switchValue ? '开启' : '关闭'}</Text>
            </div>
          </Card>
        </Col>

        <Col xs={24} lg={12}>
          <Card title='滑块' size='small'>
            <Slider value={sliderValue} onChange={setSliderValue} />
            <Text type='secondary'>当前值: {sliderValue}</Text>
          </Card>
        </Col>

        <Col xs={24} lg={12}>
          <Card title='评分' size='small'>
            <Rate value={rateValue} onChange={setRateValue} />
            <div style={{ marginTop: 8 }}>
              <Text type='secondary'>当前评分: {rateValue} 星</Text>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  )
}
