import { Button, Card, Row, Col, Image } from 'antd'
import { useIterator } from './hooks';

const data = [
  { src: 'https://cataas.com/cat?cat=1', title: 'Kitten 1' },
  { src: 'https://cataas.com/cat?cat=2', title: 'Kitten 2' },
  { src: 'https://cataas.com/cat?cat=3', title: 'Kitten 3' },
  { src: 'https://cataas.com/cat?cat=4', title: 'Kitten 4' }
];

const Iterator = () => {
  const { current, next, previous, index } = useIterator(data);

  return (
    <div style={{ padding: 20 }}>
      <Card
        cover={<Image alt={current.title} src={current.src} />}
        style={{ width: 300, margin: 'auto' }}
      >
        <Card.Meta title={current.title} description={`Image ${index + 1} of ${data.length}`} />
      </Card>
      <Row justify="center" style={{ marginTop: 20 }}>
        <Col>
          <Button onClick={previous} style={{ marginRight: 10 }}>Previous</Button>
          <Button onClick={next}>Next</Button>
        </Col>
      </Row>
    </div>
  );
};

export default Iterator;