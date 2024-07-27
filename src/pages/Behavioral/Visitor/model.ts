import React from 'react'

export interface AnalyticsVisitor {
  visitButtonComponent(element: React.MouseEvent<HTMLButtonElement>): void;
  visitInputComponent(element: React.MouseEvent<HTMLInputElement>): void;
}

class ConsoleAnalyticsVisitor implements AnalyticsVisitor {
  private static instance: ConsoleAnalyticsVisitor;

  private constructor() {}

  public static getInstance(): ConsoleAnalyticsVisitor {
    if (!ConsoleAnalyticsVisitor.instance) {
      ConsoleAnalyticsVisitor.instance = new ConsoleAnalyticsVisitor();
    }
    return ConsoleAnalyticsVisitor.instance;
  }

  visitButtonComponent(_event: React.MouseEvent<HTMLButtonElement>) {
    console.log(`Button component clicked`);
  }

  visitInputComponent(_event: React.MouseEvent<HTMLInputElement>) {
    console.log(`Input component clicked`);
  }
}

export default ConsoleAnalyticsVisitor;