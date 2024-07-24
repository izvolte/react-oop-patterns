import React from 'react'

import { Button as AntButton } from 'antd';

import { AnalyticsVisitor } from './model.ts'

type PropsType = {
  visitor: AnalyticsVisitor;
}

export const Button = ({ visitor }: PropsType) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    visitor.visitButtonComponent(event);
  };

  return <AntButton type="primary" onClick={handleClick}>Click Me</AntButton>;
};