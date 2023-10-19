import LeafComponent from './LeafComponent'

class RadioComponent extends LeafComponent {
  constructor(
    public name: string,
    public options: string[],
    public title?: string,
    isHidden?: string
  ) {
    super(name, isHidden)
  }
}

export default RadioComponent
