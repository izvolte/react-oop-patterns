import { content } from './mock.ts'
import { List, Space } from 'antd'

import NewsVisualListItemView from './components/NewsVisualListItemView.tsx'
import NewsDescriptiveListItemView from './components/NewsDescriptiveListItemView.tsx'

const Bridge = () => {
  return (
    <Space direction='vertical'>
      <List bordered itemLayout='horizontal'>
        {content.map(item => (
          <NewsVisualListItemView contentType={item} key={item.id} />
        ))}
      </List>
      <List bordered itemLayout='horizontal'>
        {content.map(item => (
          <NewsDescriptiveListItemView contentType={item} key={item.id} />
        ))}
      </List>
    </Space>
  )
}

export default Bridge
