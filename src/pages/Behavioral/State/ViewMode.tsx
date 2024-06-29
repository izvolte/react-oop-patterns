import { Button, Space, Typography } from 'antd'

const { Text } = Typography;

interface ViewModeProps {
  text: string;
  onEdit: () => void;
}

const ViewMode = ({ text, onEdit }: ViewModeProps) => {
  return (
    <Space direction={'vertical'}>
      <Text>{text}</Text>
      <Button type="link" onClick={onEdit}>
        Edit
      </Button>
    </Space>
  );
};

export default ViewMode;