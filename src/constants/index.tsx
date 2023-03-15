import { ConfigProviderProps } from 'antd/es/config-provider';

export const antdConfig: ConfigProviderProps = {
  theme: {
    token: {
      colorPrimary: CONFIG.theme.accentColor,
    },
  },
};
