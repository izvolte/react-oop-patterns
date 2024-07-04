import { useState } from 'react'

import { Button, ConfigProvider, Select, Space } from 'antd'

import { useLightTheme } from './useLightTheme.ts'
import { useDarkTheme } from './useDarkTheme.ts'
import { ThemeStrategy } from './types.ts'

const Strategy = () => {
  const [themeStrategy, setThemeStrategy] = useState<ThemeStrategy>(useLightTheme());

  const handleChange = (value: string) => {
    if (value === 'light') {
      setThemeStrategy(useLightTheme());
    } else if (value === 'dark') {
      setThemeStrategy(useDarkTheme());
    }
  };

  return (
    <ConfigProvider theme={themeStrategy.getThemeConfig()}>
      <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
        <Select defaultValue="light" style={{ width: 200 }} onChange={handleChange}>
          <Select.Option value="light">Light Theme</Select.Option>
          <Select.Option value="dark">Dark Theme</Select.Option>
        </Select>
        <Space>
          <Button type="primary">Primary</Button>
          <Button>Default</Button>
        </Space>
      </Space>
    </ConfigProvider>
  );
};

export default Strategy;