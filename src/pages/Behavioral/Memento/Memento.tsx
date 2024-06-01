import { Button, Typography } from 'antd';
import useMemento from './useMemento';

const { Title } = Typography;

interface CounterState {
  count: number;
}

const Memento = () => {
  const {state, set, undo, redo} = useMemento<CounterState>({ count: 0 });

  return (
    <div style={{ padding: '20px' }}>
      <Title level={4}>Count: {state.present.count}</Title>
      <Button type="primary" onClick={() => set({ count: state.present.count + 1 })}>
        Increment
      </Button>
      <Button type="primary" onClick={() => set({ count: state.present.count - 1 })} style={{ marginLeft: '8px' }}>
        Decrement
      </Button>
      <Button onClick={undo} disabled={state.past.length === 0} style={{ marginLeft: '8px' }}>
        Undo
      </Button>
      <Button onClick={redo} disabled={state.future.length === 0} style={{ marginLeft: '8px' }}>
        Redo
      </Button>
    </div>
  );
};

export default Memento;