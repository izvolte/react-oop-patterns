import { useReducer } from 'react';

interface State<T> {
  past: T[];
  present: T;
  future: T[];
}

type Action<T> =
  | { type: 'SET'; payload: T }
  | { type: 'UNDO' }
  | { type: 'REDO' };

const initialState = <T>(initialValue: T): State<T> => ({
  past: [],
  present: initialValue,
  future: []
});

const reducer = <T>(state: State<T>, action: Action<T>): State<T> => {
  const { past, present, future } = state;

  switch (action.type) {
    case 'SET':
      return {
        past: [...past, present],
        present: action.payload!,
        future: []
      };
    case 'UNDO':
      if (past.length === 0) return state;
      const previous = past[past.length - 1];
      return {
        past: past.slice(0, past.length - 1),
        present: previous,
        future: [present, ...future]
      };
    case 'REDO':
      if (future.length === 0) return state;
      const next = future[0];
      return {
        past: [...past, present],
        present: next,
        future: future.slice(1)
      };
    default:
      return state;
  }
};

const useMemento = <T>(initialValue: T) => {
  const [state, dispatch] = useReducer(reducer<T>, initialState(initialValue));

  const set = (newValue: T) => {
    dispatch({ type: 'SET', payload: newValue });
  };

  const undo = () => {
    dispatch({ type: 'UNDO' });
  };

  const redo = () => {
    dispatch({ type: 'REDO' });
  };

  return {state, set, undo, redo};
};


export default useMemento;