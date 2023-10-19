import LeafComponent from './LeafComponent'

class InputComponent extends LeafComponent {
  constructor(
    public placeholder: string,
    public title?: string,
    name?: string,
    isHidden?: string
  ) {
    super(name, isHidden)
  }
}

export default InputComponent
