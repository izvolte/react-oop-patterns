import emitter from './models.ts'
import { Button } from 'antd'

export const FileOpener = () => {
  const openFile = () => {
    emitter.emit('open', 'example.txt');
  };

  return (
    <Button type="primary" onClick={openFile}>
      Open File
    </Button>
  );
};