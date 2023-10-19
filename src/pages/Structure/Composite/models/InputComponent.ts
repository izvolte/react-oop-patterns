import LeafComponent from './LeafComponent'

class InputComponent implements LeafComponent {
  constructor(
    public placeholder: string,
    public name: string,
    public title?: string,
    public isHidden?: string
  ) {}
}

export default InputComponent
