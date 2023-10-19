export interface Leaf {
  onChange?: (value: ValueLeaf) => void
  type?: 'text' | 'input' | 'radio' | 'checkbox'
}

export interface TextComponent extends Leaf {
  type?: 'text'
  text: string
}

export interface InputComponent extends Leaf {
  name: string
  placeholder: string
  title?: string
  type?: 'input'
}

export interface RadioComponent extends Leaf {
  name: string
  options: string[]
  title?: string
  type?: 'radio'
}

export interface CheckboxComponent extends Leaf {
  type?: 'checkbox'
  name: string
}

export type FormComponent = {
  isHidden?: string
  onChangeValue?: (value: ValueLeaf, name: string) => void
  onChangeValues?: (values: ValuesComposite) => void
}

export type LeafComponent = FormComponent & {
  isComposite: false
  childrenComponents?: []
  content: TextComponent | InputComponent | RadioComponent | CheckboxComponent
}

export type CompositeComponent = FormComponent & {
  name?: string
  isComposite: true
  dropdown: boolean
  titleDropdown?: string
  childrenComponents: (LeafComponent | CompositeComponent)[]
}

export type ValueLeaf = boolean | string

export type ValuesComposite = Record<string, ValueLeaf>

export type HiddenStates = Record<string, boolean>
