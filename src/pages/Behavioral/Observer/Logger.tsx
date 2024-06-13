import { useEffect, useState } from 'react'
import emitter from './models'
import { List } from 'antd'

export const EventLogger = () => {
  const [log, setLog] = useState<string[]>([]);

  useEffect(() => {
    const handleOpen = (filename: string) => {
      setLog(prevLog => [`File opened: ${filename}`, ...prevLog]);
    };

    const handleSave = (filename: string) => {
      setLog(prevLog => [`File saved: ${filename}`, ...prevLog]);
    };

    emitter.on<string>('open', handleOpen);
    emitter.on<string>('save', handleSave);

    // Удаление подписки при размонтировании компонента
    return () => {
      emitter.off<string>('open', handleOpen);
      emitter.off<string>('save', handleSave);
    };
  }, []);

  return (
    <List
      header={<div>Event Log</div>}
      bordered
      dataSource={log}
      renderItem={item => <List.Item>{item}</List.Item>}
      style={{ marginTop: '20px' }}
    />
  );
};
