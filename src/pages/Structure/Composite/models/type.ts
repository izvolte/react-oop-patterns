import CompositeComponent from './CompositeComponent'

export interface FormComponent {
  isHidden?: string
}

export interface LeafComponent extends FormComponent {
  name: string
  isHidden?: string
}

export interface CompositePropsType {
  onChange?: (value: boolean, name: string) => void
  content: CompositeComponent
}
