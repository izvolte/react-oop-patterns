import { Collapse, Space } from 'antd'
import {
  CompositeComponent,
  HiddenStates,
  ValueLeaf,
  ValuesComposite
} from '../type'
import Input from './Input'
import Radio from './Radio'
import Checkbox from './Checkbox'
import Text from './Text'
import React from 'react'

const Composite = ({
  childrenComponents,
  dropdown,
  titleDropdown,
  isComposite,
  onChangeValue = () => null,
  onChangeValues = () => null
}: CompositeComponent) => {
  const [hidden, setHidden] = React.useState<HiddenStates>({})

  const values = React.useRef<ValuesComposite>({})

  React.useEffect(() => {
    if (!isComposite) return
    setHidden(
      childrenComponents.reduce<HiddenStates>((acc, current) => {
        if (!current.isHidden) return acc
        acc[current.isHidden] = true
        return acc
      }, {})
    )
  }, [childrenComponents, isComposite])
  const handleOnChangeCheckbox = (value: ValueLeaf, name: string) => {
    if (name in hidden && typeof value === 'boolean') {
      setHidden(prev => ({ ...prev, [name]: !value }))
    }

    onChangeValue(value, name)
    values.current[name] = value
    onChangeValues({ ...values.current })
  }

  const handleOnChangeChildrenValues = (valuesChildren: ValuesComposite) => {
    values.current = {
      ...values.current,
      ...valuesChildren
    }
    onChangeValues(values.current)
  }

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
              onChangeValue={handleOnChangeCheckbox}
              onChangeValues={handleOnChangeChildrenValues}
            />
          )

        if (!props.isComposite && visibility) {
          const { content } = props
          switch (content.type) {
            case 'checkbox':
              return (
                <Checkbox
                  key={index}
                  name={content.name}
                  onChange={value =>
                    handleOnChangeCheckbox(value, content.name)
                  }
                />
              )
            case 'input':
              return (
                <Input
                  key={index}
                  title={content.title}
                  name={content.name}
                  placeholder={content.placeholder}
                  onChange={value =>
                    handleOnChangeCheckbox(value, content.name)
                  }
                />
              )
            case 'radio':
              return (
                <Radio
                  key={index}
                  name={content.name}
                  title={content.title}
                  options={content.options}
                  onChange={value =>
                    handleOnChangeCheckbox(value, content.name)
                  }
                />
              )
            case 'text':
              return <Text key={index} text={content.text} />
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
