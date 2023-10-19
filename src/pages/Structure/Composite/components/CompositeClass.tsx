import { Collapse, Space } from 'antd'
import Input from './Input'
import Radio from './Radio'
import Checkbox from './Checkbox'
import Text from './Text'
import React from 'react'
import { CompositePropsType } from '../models/type'
import CompositeComponent from '../models/CompositeComponent'
import LeafComponent from '../models/LeafComponent'
import CheckboxComponent from '../models/CheckboxComponent'
import InputComponent from '../models/InputComponent'
import RadioComponent from '../models/RadioComponent'
import TextComponent from '../models/TextComponent'

const Composite = ({ content, onChange }: CompositePropsType) => {
  const [hidden, setHidden] = React.useState<Record<string, boolean>>({})

  const { childrenComponents, dropdown, titleDropdown, listHiddenChildren } =
    content

  React.useEffect(() => {
    setHidden(listHiddenChildren(childrenComponents))
  }, [listHiddenChildren, childrenComponents])
  const handleOnChangeCheckbox = (value: boolean, name?: string) => {
    if (!name) return

    if (name in hidden) {
      setHidden(prev => ({ ...prev, [name]: value }))
    }

    if (onChange) {
      onChange(value, name)
    }
  }

  const components = (
    <Space direction='vertical'>
      {childrenComponents.map((component, index) => {
        const visibility = !component.isHidden || !hidden[component.isHidden]

        if (component instanceof CompositeComponent && visibility) {
          return (
            <Composite
              key={index}
              content={component}
              onChange={handleOnChangeCheckbox}
            />
          )
        }

        if (component instanceof LeafComponent && visibility) {
          if (component instanceof CheckboxComponent) {
            return (
              <Checkbox
                key={index}
                name={component.name}
                onChange={value =>
                  handleOnChangeCheckbox(value, component.name)
                }
              />
            )
          }
          if (component instanceof InputComponent) {
            return (
              <Input
                key={index}
                title={component.title}
                placeholder={component.placeholder}
              />
            )
          }
          if (component instanceof RadioComponent) {
            return (
              <Radio
                key={index}
                name={component.name}
                title={component.title}
                options={component.options}
              />
            )
          }
          if (component instanceof TextComponent) {
            return <Text key={index} text={component.text} />
          }
        }
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
