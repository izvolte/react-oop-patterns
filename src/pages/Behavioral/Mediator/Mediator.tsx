import { Button, Card, Layout } from 'antd';
import { MediatorProvider, useMediator } from './context'

const { Content } = Layout;

const ComponentA = () => {

  const { changeValue } = useMediator();

  return (
    <Card title="Component A" style={{ marginBottom: '16px' }}>
      <Button type="primary" onClick={() => changeValue('changed by A')}>
        Change Value
      </Button>
    </Card>
  );
};

const ComponentB = () => {
  const { state } = useMediator();

  return (
    <Card title="Component B">
      <p>Value: {state.value}</p>
    </Card>
  );
};

const Mediator = () => (
  <MediatorProvider>
      <Content style={{ padding: '16px' }}>
        <ComponentA />
        <ComponentB />
      </Content>
  </MediatorProvider>
);

export default Mediator;