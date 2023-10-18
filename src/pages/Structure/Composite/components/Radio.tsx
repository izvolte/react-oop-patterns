import { RadioComponent } from '../type'
import { Form, Radio as RadioAntd, RadioChangeEvent, Space } from 'antd'

import React from 'react'

const Radio = ({ name, title, options }: RadioComponent) => {
  const [value, setValue] = React.useState(1)

  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value)
  }

  return (
    <Form.Item label={title} name={name}>
      <RadioAntd.Group onChange={onChange} value={value}>
        <Space direction='vertical'>
          {options.map(option => (
            <RadioAntd key={option} value={option}>
              {option}
            </RadioAntd>
          ))}
        </Space>
      </RadioAntd.Group>
    </Form.Item>
  )
}
export default Radio
