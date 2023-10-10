import { Image, Typography } from 'antd'
import { ContentTypeImplementation } from '../types'
export class VideoContentType implements ContentTypeImplementation {
  constructor(
    public id: string,
    private title: string,
    private description: string,
    private thumbnailUrl: string,
    private url: string
  ) {}

  renderThumbnail() {
    return () => <Image width={200} src={this.thumbnailUrl} />
  }

  renderCaption() {
    return () => <Typography.Text keyboard>{this.description}</Typography.Text>
  }

  renderTitle() {
    return () => (
      <Typography.Title level={3}>Видео: {this.title}</Typography.Title>
    )
  }

  renderLink() {
    return () => <Typography.Link href={this.url}>Смотреть</Typography.Link>
  }
}
