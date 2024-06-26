import { Button, Typography } from 'antd';

const { Text } = Typography;

interface ViewModeProps {
  text: string;
  onEdit: () => void;
}

const ViewMode = ({ text, onEdit }: ViewModeProps) => {
  return (
    <div>
      <Text>{text}</Text>
      <Button type="link" onClick={onEdit}>
        Edit
      </Button>
    </div>
  );
};

export default ViewMode;