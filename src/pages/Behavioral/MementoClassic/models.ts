export interface CounterState {
  count: number;
}

class Memento {
  private readonly state: CounterState;

  constructor(state: CounterState) {
    this.state = { ...state };
  }

  getState(): CounterState {
    return this.state;
  }
}

class Originator {
  private state: CounterState;

  constructor(initialState: CounterState) {
    this.state = initialState;
  }

  setState(state: CounterState) {
    this.state = state;
  }

  getState(): CounterState {
    return this.state;
  }

  snapshot(): Memento {
    return new Memento(this.state);
  }

  backup(memento: Memento) {
    this.state = memento.getState();
  }
}

class Caretaker {
  private mementoList: Memento[] = [];
  private redoList: Memento[] = [];

  addMemento(memento: Memento) {
    this.mementoList.push(memento);
    this.redoList = [];
  }
  popLastMemento(): Memento | null {
    const memento = this.mementoList.pop();
    if(memento) this.redoList.push(memento);
    return memento ?? null;
  }
  popLastRedoMemento(): Memento | null {
    const lastRedoMemento = this.redoList.pop()
    return lastRedoMemento ?? null;
  }

  canUndo(): boolean {
    return this.mementoList.length > 0;
  }

  canRedo(): boolean {
    return this.redoList.length > 0;
  }
}

export { Caretaker, Memento, Originator }