import { useReducer } from 'react';

import {Originator, Caretaker} from './models.ts'

interface State {
  originator: Originator;
  caretaker: Caretaker;
}

type Action =
  | { type: 'INCREMENT' }
  | { type: 'DECREMENT' }
  | { type: 'UNDO' }
  | { type: 'REDO' };

const initialState: State = {
  originator: new Originator({ count: 0 }),
  caretaker: new Caretaker(),
};

const mementoReducer = (state: State, action: Action): State => {
  const { originator, caretaker } = state;

  switch (action.type) {
    case 'INCREMENT':
      caretaker.addMemento(originator.snapshot());
      originator.setState({ count: originator.getState().count + 1 });
      return { ...state }
    case 'DECREMENT':
      caretaker.addMemento(originator.snapshot());
      originator.setState({ count: originator.getState().count - 1 });
      return { ...state }
    case 'UNDO':
      const previousMemento = caretaker.popLastMemento();
      if (previousMemento) {
        originator.backup(previousMemento);
        return { ...state }
      }
      return state;
    case 'REDO':
      const nextMemento = caretaker.popLastRedoMemento();
      if (nextMemento) {
        originator.setState(nextMemento.getState());
        return { ...state }
      }
      return { ...state };
    default:
      return { ...state };
  }
};

export const useMemento = () => {
  const [state, dispatch] = useReducer(mementoReducer, initialState);

  const increment = () => dispatch({ type: 'INCREMENT' });
  const decrement = () => dispatch({ type: 'DECREMENT' });
  const undo = () => dispatch({ type: 'UNDO' });
  const redo = () => dispatch({ type: 'REDO' });

  return {
    state: state.originator.getState(),
    canUndo: state.caretaker.canUndo(),
    canRedo: state.caretaker.canRedo(),
    increment,
    decrement,
    undo,
    redo,
  };
};
