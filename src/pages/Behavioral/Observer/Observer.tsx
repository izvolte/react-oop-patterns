import { Layout } from 'antd';
import { FileOpener } from './FileOpener.tsx'
import { FileSaver } from './FileSaver.tsx'
import { EventLogger } from '@/pages/Behavioral/Observer/Logger.tsx'

const { Content } = Layout;
const Observer = () => {
  return (
    <Layout className="layout">
      <Content style={{ padding: '50px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <FileOpener />
          <FileSaver />
          <EventLogger/>
      </Content>
    </Layout>
  );
};

export default Observer;