import { Button, Form, Space } from 'antd'
import Composite from './components/Composite'
import { mock } from './mock'

const CompositeFC = () => {
  return (
    <Form layout='vertical'>
      <Space direction='vertical'>
        <Composite
          isComposite={mock.isComposite}
          childrenComponents={mock.childrenComponents}
          dropdown={mock.dropdown}
        />
        <Button>Отправить</Button>
      </Space>
    </Form>
  )
}

export default CompositeFC
