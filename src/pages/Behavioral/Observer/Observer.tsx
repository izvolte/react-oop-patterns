import { Layout, Typography } from 'antd';
import { FileOpener } from './FileOpener.tsx'
import { FileSaver } from './FileSaver.tsx'
import { EventLogger } from '@/pages/Behavioral/Observer/Logger.tsx'

const { Header, Content } = Layout;
const { Title } = Typography;

const Observer = () => {
  return (
    <Layout className="layout">
      <Header>
        <Title style={{ color: 'white', textAlign: 'center' }} level={2}>
          EventEmitter Example
        </Title>
      </Header>
      <Content style={{ padding: '50px', display: 'flex', flexDirection: 'column', gap: '10pxд' }}>
          <FileOpener />
          <FileSaver />
          <EventLogger/>
      </Content>
    </Layout>
  );
};

export default Observer;