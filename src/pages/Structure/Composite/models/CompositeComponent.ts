import FormComponent from './FormComponent'

class CompositeComponent extends FormComponent {
  public childrenComponents: FormComponent[] = []

  constructor(
    public dropdown = false,
    public titleDropdown?: string,
    isHidden?: string
  ) {
    super(isHidden)
  }

  public listHiddenChildren(
    childrenComponents: FormComponent[]
  ): Record<string, boolean> {
    return childrenComponents.reduce<Record<string, boolean>>(
      (acc, current) => {
        if (!current.isHidden) return acc
        acc[current.isHidden] = true
        return acc
      },
      {}
    )
  }

  public add(component: FormComponent) {
    this.childrenComponents.push(component)
  }
}

export default CompositeComponent
