import LeafComponent from './LeafComponent.ts'

class TextComponent extends LeafComponent {
  constructor(
    public text: string,
    isHidden?: string
  ) {
    super('simple-text', isHidden)
  }
}

export default TextComponent
