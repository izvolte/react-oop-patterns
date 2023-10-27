import { SelectComponent, SelectProps } from '../type'

const lgbt = ['Лесбиянка', 'Гей', 'Бисексуал', 'Трансгендер']

const withLGBTGender =
  (Select: SelectComponent) =>
  ({ options = [], label = '' }: SelectProps) => {
    return <Select label={'LGBT' + label} options={[...options, ...lgbt]} />
  }

export default withLGBTGender
