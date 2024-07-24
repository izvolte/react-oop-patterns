import React from 'react'


import { AnalyticsVisitor } from './model.ts'
import { Input as AntInput } from 'antd'

type PropsType = {
  visitor: AnalyticsVisitor;
}

export const Input = ({ visitor }: PropsType) => {
  const handleClick = (event: React.MouseEvent<HTMLInputElement>) => {
    visitor.visitInputComponent(event);
  };

  return <AntInput placeholder="Type something" onClick={handleClick} />;
};