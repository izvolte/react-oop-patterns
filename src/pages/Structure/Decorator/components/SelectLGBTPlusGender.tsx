import { SelectComponent, SelectProps } from '../type'

const lgbtPlus = [
  'Трансмужчина',
  'Трансженщина',
  'Небинарный',
  'Гендерквир',
  'Демибой (демимужской)',
  'Демигерл (демиженский)',
  'Трансмаскулинный',
  'Трансфемининный',
  'Агендер (безгендерный)',
  'Бигендер',
  'Гендерфлюид (гендер-течение)',
  'Тву-спирит',
  'Андоргин',
  'Нонконформный (гендерно-неконформный)'
]

const withLGBTPlusGender =
  (Select: SelectComponent) =>
  ({ options = [], label = '' }: SelectProps) => {
    return <Select label={'+' + label} options={[...options, ...lgbtPlus]} />
  }

export default withLGBTPlusGender
