import { ThemeStrategy } from './types.ts'

export const useDarkTheme = (): ThemeStrategy => {
  return {
    getThemeConfig: () => ({
      token: {
        colorPrimary: '#1890ff',
        borderRadius: 2,
        colorBgContainer: '#001529',
        colorText: '#ffffff',
      },
    }),
  };
};