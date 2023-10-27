import { SelectComponent, SelectProps } from '../type'

const withGender =
  (Select: SelectComponent) =>
  ({ options = [], label = '' }: SelectProps) => {
    return (
      <Select
        label={'Выберите гендер ' + label}
        options={['Мужчина', 'Женщина', ...options]}
      />
    )
  }

export default withGender
