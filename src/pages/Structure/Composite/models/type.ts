import CompositeComponent from './CompositeComponent'
import { ValueLeaf, ValuesComposite } from '../type.ts'

export interface FormComponent {
  isHidden?: string
  onChange?: (value: boolean, name: string) => void
}

export interface LeafComponent extends FormComponent {
  name: string
  isHidden?: string
}

export interface CompositePropsType {
  onChangeValue?: (value: ValueLeaf, name: string) => void
  onChangeValues?: (values: ValuesComposite) => void
  content: CompositeComponent
}
