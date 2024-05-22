import { useContext, } from 'react';
import { Button, Card, Layout } from 'antd';
import { MediatorContext, MediatorProvider, useMediator } from './context'

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
  const context = useContext(MediatorContext);

  if (!context) {
    throw new Error('ComponentB must be used within a MediatorProvider');
  }

  const { state } = context;

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