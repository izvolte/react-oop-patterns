import { Button, Form, Space } from 'antd'
import CompositeComponent from './components/CompositeClass'
import mock from './models/mock'

const Composite = () => {
  return (
    <Form layout='vertical'>
      <Space direction='vertical'>
        <CompositeComponent content={mock} />
        <Button>Отправить</Button>
      </Space>
    </Form>
  )
}

export default Composite
