import React from 'react';
import { Button, Input } from 'antd';

interface EditModeProps {
  text: string;
  onSave: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const EditMode = ({ text, onSave, onChange }: EditModeProps) => {
  return (
    <div>
      <Input value={text} onChange={onChange} />
      <Button type="primary" onClick={onSave}>
        Save
      </Button>
    </div>
  );
};

export default EditMode;