import { InputComponent } from '../type'
import { Input as InputAntd } from 'antd'
import FormItem from 'antd/es/form/FormItem'

const Input = ({ title, placeholder }: Omit<InputComponent, 'type'>) => {
  return (
    <FormItem label={title}>
      <InputAntd placeholder={placeholder} />
    </FormItem>
  )
}
export default Input
