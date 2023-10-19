import LeafComponent from './LeafComponent'

class CheckboxComponent implements LeafComponent {
  constructor(
    public name: string,
    public isHidden?: string
  ) {}
}

export default CheckboxComponent
