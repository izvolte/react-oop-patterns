import { ThemeConfig } from 'antd/es/config-provider/context';

export interface ThemeStrategy {
  getThemeConfig(): ThemeConfig;
}