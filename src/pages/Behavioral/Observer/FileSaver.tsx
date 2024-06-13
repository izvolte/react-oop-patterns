import emitter from './models.ts'
import { Button } from 'antd'

export const FileSaver = () => {
  const saveFile = () => {
    emitter.emit('save', 'example.txt');
  };

  return (
    <Button type="primary" onClick={saveFile}>
      Save File
    </Button>
  );
};