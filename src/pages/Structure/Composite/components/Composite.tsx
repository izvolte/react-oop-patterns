import { Collapse, Space } from 'antd'
import { CompositeComponent } from '../type'
import Input from './Input'
import Radio from './Radio'
import Checkbox from './Checkbox'
import Text from './Text'
import React from 'react'

const Composite = (props: CompositeComponent) => {
  const [hidden, setHidden] = React.useState<Record<string, boolean>>({})

  React.useEffect(() => {
    if (!props.isComposite) return
    setHidden(
      props.childrenComponents.reduce<Record<string, boolean>>(
        (acc, current) => {
          if (!current.isHidden) return acc
          acc[current.isHidden] = true
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

  const { childrenComponents, dropdown, titleDropdown } = props

  const components = (
    <Space direction='vertical'>
      {childrenComponents.map((props, index) => {
        const visibility = !props.isHidden || !hidden[props.isHidden]

        if (props.isComposite && visibility)
          return (
            <Composite
              key={index}
              isComposite={props.isComposite}
              dropdown={props.dropdown}
              titleDropdown={props.titleDropdown}
              childrenComponents={props.childrenComponents}
              onChange={handleOnChangeCheckbox}
            />
          )

        if (!props.isComposite && visibility) {
          const { content } = props
          switch (content.type) {
            case 'checkbox':
              return (
                <Checkbox
                  name={content.name}
                  onChange={value =>
                    handleOnChangeCheckbox(value, content.name)
                  }
                />
              )
            case 'input':
              return (
                <Input
                  title={content.title}
                  placeholder={content.placeholder}
                />
              )
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
        return null
      })}
    </Space>
  )

  return dropdown ? (
    <Collapse
      items={[
        { key: titleDropdown, label: titleDropdown, children: components }
      ]}
    />
  ) : (
    components
  )
}

export default Composite
