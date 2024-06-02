import { Button, Typography } from 'antd';
import { useMemento } from './useMemento';

const { Title } = Typography;

const MementoClassic = () => {
  const { state, canUndo, canRedo, increment, decrement, undo, redo } = useMemento();

  return (
    <div style={{ padding: '20px' }}>
      <Title level={4}>Count: {state.count}</Title>
      <Button type="primary" onClick={increment}>
        Increment
      </Button>
      <Button type="primary" onClick={decrement} style={{ marginLeft: '8px' }}>
        Decrement
      </Button>
      <Button onClick={undo} disabled={!canUndo} style={{ marginLeft: '8px' }}>
        Undo
      </Button>
      <Button onClick={redo} disabled={!canRedo} style={{ marginLeft: '8px' }}>
        Redo
      </Button>
    </div>
  );
};

export default MementoClassic;