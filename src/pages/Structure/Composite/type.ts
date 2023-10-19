export interface Leaf {
  type?: 'text' | 'input' | 'radio' | 'checkbox'
}

export interface TextComponent extends Leaf {
  type?: 'text'
  text: string
}

export interface InputComponent extends Leaf {
  type?: 'input'
  title?: string
  placeholder: string
}

export interface RadioComponent extends Leaf {
  type?: 'radio'
  name: string
  title?: string
  options: string[]
}

export interface CheckboxComponent extends Leaf {
  type?: 'checkbox'
  onChange?: (value: boolean) => void
  name: string
}

export type FormComponent = {
  isHidden?: string
  onChange?: (value: boolean, name: string) => void
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

// export type HiddenState = {
//   VK: boolean
//   Instagram: boolean
//   LinkedIn: boolean
//   Telegram: boolean
// }

// export type HiddenContext = {
//   hidden: HiddenState
//   setHidden: (name: string, visibility: boolean) => void
// }
