import { Button, Space, DatePicker } from 'antd'
import { LocaleSwitcher } from '@/components/business/LocaleSwitcher'

export default function Home() {
  return (
    <div className='min-h-screen p-8 bg-white dark:bg-zinc-950'>
      <Space style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <LocaleSwitcher />
        <Space>
          <Button type='primary'>Primary Button</Button>
          <Button>Default Button</Button>
        </Space>
        <DatePicker />
      </Space>
    </div>
  )
}
