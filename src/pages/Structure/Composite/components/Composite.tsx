import { Collapse, Space } from 'antd'
import { FormComponent } from '../type'
import Input from './Input'
import Radio from './Radio'
import Checkbox from './Checkbox'
import Text from './Text'
import React from 'react'

const Composite = (props: FormComponent) => {
  const [hidden, setHidden] = React.useState<Record<string, boolean>>({})

  React.useEffect(() => {
    if (!props.isComposite) return
    setHidden(
      props.childrenComponents.reduce<Record<string, boolean>>(
        (acc, current) => {
          if (!current.isHidden) return acc
          acc[current.isHidden[0]] = current.isHidden[1]
          return acc
        },
        {}
      )
    )
  }, [props.childrenComponents, props.isComposite])
  const handleOnChangeCheckbox = (value: boolean, name: string) => {
    if (name in hidden) {
      setHidden(prev => ({ ...prev, [name]: value }))
    }

    if (props?.onChange) {
      props?.onChange(value, name)
    }
  }

  if (!props.isComposite) {
    const { content } = props
    switch (content.type) {
      case 'checkbox':
        return (
          <Checkbox
            name={content.name}
            onChange={value => handleOnChangeCheckbox(value, content.name)}
          />
        )
      case 'input':
        return <Input title={content.title} placeholder={content.placeholder} />
      case 'radio':
        return (
          <Radio
            name={content.name}
            title={content.title}
            options={content.options}
          />
        )
      case 'text':
        return <Text text={content.text} />
      default:
        throw new Error('Тип контента не найден')
    }
  }

  const { childrenComponents, dropdown, titleDropdown } = props

  const components = (
    <Space direction='vertical'>
      {childrenComponents.map((props, index) =>
        !props.isHidden || !hidden[props.isHidden[0]] ? (
          props.isComposite ? (
            <Composite
              key={index}
              isComposite={props.isComposite}
              dropdown={props.dropdown}
              titleDropdown={props.titleDropdown}
              childrenComponents={props.childrenComponents}
              onChange={handleOnChangeCheckbox}
            />
          ) : (
            <Composite
              key={index}
              onChange={handleOnChangeCheckbox}
              isComposite={props.isComposite}
              content={props.content}
            />
          )
        ) : null
      )}
    </Space>
  )

  return (
    <Space direction='vertical'>
      {dropdown ? (
        <Collapse
          items={[
            { key: titleDropdown, label: titleDropdown, children: components }
          ]}
        />
      ) : (
        components
      )}
    </Space>
  )
}

export default Composite
