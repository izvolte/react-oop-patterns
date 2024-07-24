import ConsoleAnalyticsVisitor from './model.ts'
import { Button } from './Button.tsx'
import { Input } from './Input.tsx'

const visitor = ConsoleAnalyticsVisitor.getInstance()

const Visitor = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Analytics with Visitor Pattern</h1>
      <Button visitor={visitor} />
      <Input visitor={visitor} />
    </div>
  );
};

export default Visitor;