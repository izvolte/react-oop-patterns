interface CounterState {
  count: number;
}
class Memento {
  private state: CounterState;

  constructor(state: CounterState) {
    this.state = { ...state };
  }

  getState(): CounterState {
    return this.state;
  }
}

export class Originator {
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

  saveStateToMemento(): Memento {
    return new Memento(this.state);
  }

  getStateFromMemento(memento: Memento) {
    this.state = memento.getState();
  }
}

export class Caretaker {
  private mementoList: Memento[] = [];
  private redoList: Memento[] = [];

  addMemento(memento: Memento) {
    this.mementoList.push(memento);
    this.redoList = []; // Очистить redoList при новом действии
  }

  getLastMemento(): Memento | null {
    if (this.mementoList.length === 0) {
      return null;
    }
    return this.mementoList[this.mementoList.length - 1];
  }

  popLastMemento(): Memento | null {
    if (this.mementoList.length === 0) {
      return null;
    }
    const memento = this.mementoList.pop()!;
    this.redoList.push(memento);
    return memento;
  }

  getLastRedoMemento(): Memento | null {
    if (this.redoList.length === 0) {
      return null;
    }
    return this.redoList[this.redoList.length - 1];
  }

  popLastRedoMemento(): Memento | null {
    if (this.redoList.length === 0) {
      return null;
    }
    return this.redoList.pop()!;
  }
}