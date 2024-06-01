import { useState, useRef } from 'react';
import { Button, Typography } from 'antd';

import { Originator, Caretaker } from './models';

const { Title } = Typography;

interface CounterState {
  count: number;
}

const MementoClassic = () => {
  const originatorRef = useRef(new Originator({ count: 0 }));
  const caretakerRef = useRef(new Caretaker());
  const [state, setState] = useState<CounterState>(originatorRef.current.getState());

  const handleIncrement = () => {
    caretakerRef.current.addMemento(originatorRef.current.saveStateToMemento());
    originatorRef.current.setState({ count: state.count + 1 });
    setState(originatorRef.current.getState());
  };

  const handleDecrement = () => {
    caretakerRef.current.addMemento(originatorRef.current.saveStateToMemento());
    originatorRef.current.setState({ count: state.count - 1 });
    setState(originatorRef.current.getState());
  };

  const handleUndo = () => {
    const previousMemento = caretakerRef.current.getLastMemento();
    if (previousMemento) {
      originatorRef.current.getStateFromMemento(previousMemento);
      caretakerRef.current.popLastMemento();
      setState(originatorRef.current.getState());
    }
  };

  const handleRedo = () => {
    const nextMemento = caretakerRef.current.getLastRedoMemento();
    if (nextMemento) {
      caretakerRef.current.popLastRedoMemento();
      originatorRef.current.setState(nextMemento.getState());
      setState(originatorRef.current.getState());
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <Title level={4}>Count: {state.count}</Title>
      <Button type="primary" onClick={handleIncrement}>
        Increment
      </Button>
      <Button type="primary" onClick={handleDecrement} style={{ marginLeft: '8px' }}>
        Decrement
      </Button>
      <Button onClick={handleUndo} disabled={caretakerRef.current.getLastMemento() === null} style={{ marginLeft: '8px' }}>
        Undo
      </Button>
      <Button onClick={handleRedo} disabled={caretakerRef.current.getLastRedoMemento() === null} style={{ marginLeft: '8px' }}>
        Redo
      </Button>
    </div>
  );
};

export default MementoClassic;