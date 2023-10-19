import { Button, Form, Space } from 'antd'
import CompositeComponent from './components/Composite'
import { mock } from './mock'

const Composite = () => {
  return (
    <Form layout='vertical'>
      <Space direction='vertical'>
        <CompositeComponent
          isComposite={mock.isComposite}
          childrenComponents={mock.childrenComponents}
          dropdown={mock.dropdown}
        />
        <Button>Отправить</Button>
      </Space>
    </Form>
  )
}

export default Composite
