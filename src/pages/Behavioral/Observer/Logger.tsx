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

    emitter.on('open', handleOpen);
    emitter.on('save', handleSave);

    // Удаление подписки при размонтировании компонента
    return () => {
      emitter.off('open', handleOpen);
      emitter.off('save', handleSave);
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
