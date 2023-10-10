import { Avatar, Typography } from 'antd'
import { ContentTypeImplementation } from '../types'
export class PostContentType implements ContentTypeImplementation {
  constructor(
    public id: string,
    private title: string,
    private caption: string,
    private imageUrl: string,
    private url: string
  ) {}

  renderThumbnail() {
    return () => (
      <Avatar size={128} src={<img src={this.imageUrl} alt='avatar' />} />
    )
  }

  renderCaption() {
    return () => <Typography.Text>{this.caption}</Typography.Text>
  }

  renderTitle() {
    return () => (
      <Typography.Title level={3}>Публикация: {this.title}</Typography.Title>
    )
  }

  renderLink() {
    return () => <Typography.Link href={this.url}>Читать все</Typography.Link>
  }
}
