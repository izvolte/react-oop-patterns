import LeafComponent from './LeafComponent.ts'

class TextComponent implements LeafComponent {
  public name = 'simple-text'
  constructor(
    public text: string,
    public isHidden?: string
  ) {}
}

export default TextComponent
