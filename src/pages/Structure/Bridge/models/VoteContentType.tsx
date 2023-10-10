import { Avatar, Radio, RadioChangeEvent, Space, Typography } from 'antd'
import React from 'react'
import { ContentTypeImplementation } from '../types'
export class VoteContentType implements ContentTypeImplementation {
  constructor(
    public id: string,
    private title: string,
    private options: string[],
    private thumbnailUrl: string,
    private url: string
  ) {}

  renderThumbnail() {
    return () => (
      <Avatar
        shape='square'
        size={256}
        src={<img src={this.thumbnailUrl} alt='avatar' />}
      />
    )
  }

  renderCaption() {
    return () => {
      const [value, setValue] = React.useState(1)

      const onChange = (e: RadioChangeEvent) => {
        console.log('radio checked', e.target.value)
        setValue(e.target.value)
      }

      return (
        <Radio.Group onChange={onChange} value={value}>
          <Space direction='vertical'>
            {this.options.map(option => (
              <Radio key={option} value={option}>
                {option}
              </Radio>
            ))}
          </Space>
        </Radio.Group>
      )
    }
  }

  renderTitle() {
    return () => (
      <Typography.Title level={3}>Голосование: {this.title}</Typography.Title>
    )
  }

  renderLink() {
    return () => (
      <Typography.Link href={this.url}>Проголосовать</Typography.Link>
    )
  }
}
