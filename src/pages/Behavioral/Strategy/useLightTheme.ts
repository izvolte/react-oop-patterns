import { ThemeStrategy } from './types.ts'

export const useLightTheme = (): ThemeStrategy => {
  return {
    getThemeConfig: () => ({
      token: {
        colorPrimary: '#00b96b',
        borderRadius: 2,
        colorBgContainer: '#f6ffed',
      },
    }),
  };
};