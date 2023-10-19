import FormComponent from './FormComponent'

abstract class LeafComponent extends FormComponent {
  protected constructor(
    public name?: string,
    isHidden?: string
  ) {
    super(isHidden)
  }
}

export default LeafComponent
