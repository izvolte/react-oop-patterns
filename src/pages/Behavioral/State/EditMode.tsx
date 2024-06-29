import React from 'react';
import { Button, Input, Space } from 'antd'

interface EditModeProps {
  text: string;
  onSave: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const EditMode = ({ text, onSave, onChange }: EditModeProps) => {
  return (
    <Space direction={'vertical'}>
      <Input value={text} onChange={onChange} />
      <Button type="primary" onClick={onSave}>
        Save
      </Button>
    </Space>
  );
};

export default EditMode;