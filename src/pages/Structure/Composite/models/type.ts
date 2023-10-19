import CompositeComponent from './CompositeComponent'

export type CompositePropsType = {
  onChange?: (value: boolean, name: string) => void
  content: CompositeComponent
}
