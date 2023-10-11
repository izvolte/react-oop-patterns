import { Typography } from 'antd'
import { ContentTypeImplementation } from './types'
import VoteContentThumbnail from '@/pages/Structure/Bridge/components/VoteContent/VoteContentThumbnail.tsx'
import VoteContentCaption from '@/pages/Structure/Bridge/components/VoteContent/VoteContentCaption.tsx'
import VoteContentTitle from '@/pages/Structure/Bridge/components/VoteContent/VoteContentTitle.tsx'
export class VoteContentType implements ContentTypeImplementation {
  constructor(
    public id: string,
    private title: string,
    private options: string[],
    private thumbnailUrl: string,
    private url: string
  ) {}

  renderThumbnail() {
    return () => <VoteContentThumbnail thumbnailUrl={this.thumbnailUrl} />
  }

  renderCaption() {
    return () => <VoteContentCaption options={this.options} />
  }

  renderTitle() {
    return () => <VoteContentTitle title={this.title} />
  }

  renderLink() {
    return () => (
      <Typography.Link href={this.url}>Проголосовать</Typography.Link>
    )
  }
}
