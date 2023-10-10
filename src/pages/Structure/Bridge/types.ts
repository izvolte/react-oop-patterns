import React from 'react'

export type ListNewsItemViewAbstractionProps = {
  contentType: ContentTypeImplementation
}

export interface ContentTypeImplementation {
  id: string
  renderTitle(): React.FC
  renderCaption(): React.FC
  renderThumbnail(): React.FC
  renderLink(): React.FC
}
