import LeafComponent from './LeafComponent'

class CheckboxComponent extends LeafComponent {
  constructor(
    public name: string,
    isHidden?: string
  ) {
    super(name, isHidden)
  }
}

export default CheckboxComponent
